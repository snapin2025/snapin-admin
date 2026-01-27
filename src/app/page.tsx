"use client"
import {
    AlertAction,
    AlertCancel,
    AlertDescription,
    AlertDialog,
    Button,
    DropDownContent,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input, Pagination,
    Select,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    Typography
} from "snapinui"
import {useState} from "react";

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState('10')
    return (
        <div>
            <main>
                <Button asChild variant={"outlined"}>
                    <Typography variant={"medium_14"}>Test</Typography>
                </Button>
                <Input type={"password"}/>
                <Select options={[{value: "1", label: "One"}, {value: "2", label: "Two"}]} label="Select"/>
                <DropdownMenu>
                    <DropdownTrigger>
                        +
                    </DropdownTrigger>
                    <DropDownContent>
                        <DropdownItem>
                            1
                        </DropdownItem>
                        <DropdownItem>
                            2
                        </DropdownItem>
                        <DropdownItem>
                            3
                        </DropdownItem>
                    </DropDownContent>
                </DropdownMenu>
                <Tabs defaultValue={"tab1"}>
                    <TabsList>
                        <TabsTrigger value="tab1">One</TabsTrigger>
                        <TabsTrigger value="tab2">Two</TabsTrigger>
                        <TabsTrigger value="tab3">Three</TabsTrigger>
                    </TabsList>

                    <TabsContent value="tab1">Tab one content</TabsContent>
                    <TabsContent value="tab2">Tab two content</TabsContent>
                    <TabsContent value="tab3">Tab three content</TabsContent>
                </Tabs>
                <AlertDialog title={'Logout'} trigger={<Button variant={'textButton'}>
                    Logout
                </Button>}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'end',
                            justifyContent: 'center',
                            gap: '18px'
                        }}
                    >
                        <>
                            <AlertDescription asChild style={{textAlign: 'left', width: '100%'}}>
                                <Typography variant={'regular_16'}>Are you sure to want logout?</Typography>
                            </AlertDescription>
                            <div style={{display: 'flex', justifyContent: 'end', gap: '24px'}}>
                                <AlertAction asChild>
                                    <Button variant={'outlined'}>Ok</Button>
                                </AlertAction>
                                <AlertCancel asChild>
                                    <Button style={{minWidth: '96px'}}>Cancel</Button>
                                </AlertCancel>
                            </div>
                        </>
                    </div>
                </AlertDialog>
                <Pagination
                    currentPage={currentPage}
                    onPageChange={page => setCurrentPage(page)}
                    pageSize={Number(pageSize)}
                    totalCount={100}
                />
            </main>
        </div>
    );
}
