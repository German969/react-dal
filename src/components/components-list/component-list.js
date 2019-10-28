import React from 'react';
import list from './components';
import './component-list.css';

function ComponentList() {
    const renderNestedList = (element) => {
        const children = element.children;
        let contentToRender = null;
        let nestedChildren = null;

        if (children) {
            contentToRender = children.map((child, index) => {
                nestedChildren = child.children;

                return (
                    <li key={index}>
                        {child.name}
                        {nestedChildren && <ul>{renderNestedList(child)}</ul>}
                    </li>
                )
            });
        }

        return contentToRender;
    };

    const renderList = () => {
        return list.map((elem, index) => {
            return (
                <li key={index}>
                    {elem.name}
                    <ul>{renderNestedList(elem)}</ul>
                </li>
            )
        });
    };

    return (
        <aside className={'component-list--container'}>
            <ul>
                {renderList()}
            </ul>
        </aside>
    );
}

export default ComponentList;