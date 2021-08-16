import { Layout } from '@openware/react-opendax';
import React, { FC } from 'react';
import {
    STORIES_FOOTER_OPTIONS,
    DEFAULT_NAVIGATIONS,
    LOGO_ICON,
} from './SharedLayout.constants';

interface SharedLayoutProps {
    children: React.ReactNode;
}

const FooterProps = {
    options: STORIES_FOOTER_OPTIONS,
    className: "bg-main-background-color",
    dropdownBlockClassName: "absolute z-50 bottom-8 w-40 bg-white rounded shadow r-2 select-none",
    dropdownOptionClassName: "block text-gray-400 hover:text-gray-500 hover:bg-gray-50 rounded px-4 py-2",
    optionClassName: "text-gray-400 hover:text-gray-500 px-5 relative",
    socialOptionClassName: "text-gray-400 hover:text-gray-500",
}

const SidebarProps = {
    navigations: DEFAULT_NAVIGATIONS,
    logo: LOGO_ICON,

}

export const SharedLayout: FC<SharedLayoutProps> = (props) => {
    return (
        <Layout
            footerProps={FooterProps}
            sidebarProps={SidebarProps}
        >
            {props.children}
        </Layout>
    );
};
