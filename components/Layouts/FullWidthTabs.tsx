import React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import DashboardPageTitle from '../Dashboards/DashboardPageTitle';
import ArticlesTable from '../Dashboards/article/ArticleTable';
import CreateArticle from '../Dashboards/article/CreateArticle';
import SectionWrap from '../elements/SectionWrap';
import ArticleForm from '../Dashboards/article/CreateArticleForm';
import MobileMenu from '../MobileMenu';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const FullWidthTabs: React.FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <div className='lg:mt-0 mt-20 w-full mx-auto'>
                <Box sx={{ width: '100%' }}>
                    <div className='flex justify-between border-b-1 border-gray-300 shadow-sm px-2'>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="full width tabs example"
                            variant="standard"
                        >
                            <Tab label="List" {...a11yProps(0)} />
                            <Tab label="Add New" {...a11yProps(1)} />
                            <Tab label="Categories" {...a11yProps(2)} />
                        </Tabs>

                    </div>

                    <TabPanel value={value} index={0}>
                        <SectionWrap>
                            <div className="div flex items-center container shrink-0 lg:px-8 mx-auto ">
                                <DashboardPageTitle subtitle={'View, Add and Edit all products'}>
                                    All Articles
                                </DashboardPageTitle>
                            </div>

                            <div className="div container lg:px-8 mx-auto h-full ">
                                <ArticlesTable />
                            </div>
                        </SectionWrap>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <SectionWrap>
                            <div className="div flex items-center container shrink-0 lg:px-8 mx-auto ">
                                <DashboardPageTitle subtitle={'View, Add and Edit all products'}>
                                    Create Article
                                </DashboardPageTitle>
                            </div>

                            <div className="div container lg:px-8 mx-auto h-full shrink-0">
                                <ArticleForm />
                            </div>
                        </SectionWrap>
                    </TabPanel>
                </Box>
            </div>
        </>

    );
}

export default FullWidthTabs;
