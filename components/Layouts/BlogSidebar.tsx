import React from 'react'
import ParagraphTitle from '../elements/ParagraphTitle'
import ProductsList from '../products/ProductsList'
import TagCloud from '../elements/TagCloud'
import CategoryList from '../elements/CategoryList'
import ArticlesListWidget from '../articles/ArticlesListWidget'

function BlogSidebar() {
    return (
        <>
            <aside className="sidebar p-4 bg-white rounded-lg ring-1 ring-gray-200">
                <h4>Similar Articles</h4>
                <hr />
                <ArticlesListWidget />
                <hr />
                <h4>Categories</h4>
                <hr />
                <CategoryList />
                <hr />
                <h4>Tag Cloud</h4>
                <TagCloud />
            
            </aside>
        </>

    )
}

export default BlogSidebar