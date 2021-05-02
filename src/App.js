import * as React from "react";
import { Admin, Resource, Layout  } from 'react-admin';

import { AssetcategoryEdit, AssetcategoryCreate } from './assetcategory';
//import AssetcategoryList from './list';
//import AssetcategoryList from './Assetcat';
//import {AssetcategoryList} from './assettree';
import AssetcategoryList from './loctree';

import { SpecificDataList, SpecificDataEdit, SpecificDataCreate } from './specificdata';

import { reducer as tree } from 'ra-tree-ui-materialui';

//import myDataProvider from './MyDataProvider'
import drfProvider from './dataProvider';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import MyLoginPage from './MyLoginPage';
//import authProvider from './authProvider';
//import MyLayout  from './Layout'
import TreeMenu from '@bb-tech/ra-treemenu';

import { createMuiTheme } from '@material-ui/core/styles';

import farsiMessages from 'ra-language-farsi';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ListIcon from '@material-ui/icons/List';

import AssetClassSubdivisionList from './AssetClassSubdivision/AssetClassSubdivisionList';
import AssetClassSubdivisionCreate from './AssetClassSubdivision/AssetClassSubdivisionCreate';
import AssetClassSubdivisionEdit from './AssetClassSubdivision/AssetClassSubdivisionEdit';
import AssetClassSubdivisionShow from './AssetClassSubdivision/AssetClassSubdivisionShow';

import AssetClassSpecificDataList from './AssetClassSpecificData/AssetClassSpecificDataList';
import AssetClassSpecificDataCreate from './AssetClassSpecificData/AssetClassSpecificDataCreate';
import AssetClassSpecificDataEdit from './AssetClassSpecificData/AssetClassSpecificDataEdit';
import AssetClassSpecificDataShow from './AssetClassSpecificData/AssetClassSpecificDataShow';

import FailureModeList from './FailureMode/FailureModeList';
import FailureModeCreate from './FailureMode/FailureModeCreate';
import FailureModeEdit from './FailureMode/FailureModeEdit';
import FailureModeShow from './FailureMode/FailureModeShow';

import AssetClassList from './AssetClass/AssetClassList';
import AssetClassCreate from './AssetClass/AssetClassCreate';
import AssetClassEdit from './AssetClass/AssetClassEdit';
import AssetClassShow from './AssetClass/AssetClassShow';

import LocationList from './Location/LocationList';
import LocationCreate from './Location/LocationCreate';
import LocationEdit from './Location/LocationEdit';
import LocationShow from './Location/LocationShow';

import AssetPriorityList from './AssetPriority/AssetPriorityList';
import AssetPriorityCreate from './AssetPriority/AssetPriorityCreate';
import AssetPriorityEdit from './AssetPriority/AssetPriorityEdit';
import AssetPriorityShow from './AssetPriority/AssetPriorityShow';

import DocumentList from './Document/DocumentList';
import DocumentCreate from './Document/DocumentCreate';
import DocumentEdit from './Document/DocumentEdit';
import DocumentShow from './Document/DocumentShow';

import AssetClassDocumentList from './AssetClassDocument/AssetClassDocumentList';
import AssetClassDocumentCreate from './AssetClassDocument/AssetClassDocumentCreate';
import AssetClassDocumentEdit from './AssetClassDocument/AssetClassDocumentEdit';
import AssetClassDocumentShow from './AssetClassDocument/AssetClassDocumentShow';

import SparePartDimensionList from './SparePartDimension/SparePartDimensionList';
import SparePartDimensionCreate from './SparePartDimension/SparePartDimensionCreate';
import SparePartDimensionEdit from './SparePartDimension/SparePartDimensionEdit';
import SparePartDimensionShow from './SparePartDimension/SparePartDimensionShow';

import SparePartCategoryList from './SparePartCategory/SparePartCategoryList';
import SparePartCategoryCreate from './SparePartCategory/SparePartCategoryCreate';
import SparePartCategoryEdit from './SparePartCategory/SparePartCategoryEdit';
import SparePartCategoryShow from './SparePartCategory/SparePartCategoryShow';

import SparePartList from './SparePart/SparePartList';
import SparePartCreate from './SparePart/SparePartCreate';
import SparePartEdit from './SparePart/SparePartEdit';
import SparePartShow from './SparePart/SparePartShow';

import AssetList from './Asset/AssetList';
import AssetCreate from './Asset/AssetCreate';
import AssetEdit from './Asset/AssetEdit';
import AssetShow from './Asset/AssetShow';

import AssetSubdivisionList from './AssetSubdivision/AssetSubdivisionList';
import AssetSubdivisionEdit from './AssetSubdivision/AssetSubdivisionEdit';
import AssetSubdivisionShow from './AssetSubdivision/AssetSubdivisionShow';

import AssetSpecificDataList from './AssetSpecificData/AssetSpecificDataList';
import AssetSpecificDataEdit from './AssetSpecificData/AssetSpecificDataEdit';
import AssetSpecificDataShow from './AssetSpecificData/AssetSpecificDataShow';

import AssetSubdivisionSparePartList from './AssetSubdivisionSparePart/AssetSubdivisionSparePartList';
import AssetSubdivisionSparePartCreate from './AssetSubdivisionSparePart/AssetSubdivisionSparePartCreate';
import AssetSubdivisionSparePartEdit from './AssetSubdivisionSparePart/AssetSubdivisionSparePartEdit';
import AssetSubdivisionSparePartShow from './AssetSubdivisionSparePart/AssetSubdivisionSparePartShow';

import TaskTypeList from './TaskType/TaskTypeList';
import TaskTypeCreate from './TaskType/TaskTypeCreate';
import TaskTypeEdit from './TaskType/TaskTypeEdit';
import TaskTypeShow from './TaskType/TaskTypeShow';

import JobCategoryList from './JobCategory/JobCategoryList';
import JobCategoryCreate from './JobCategory/JobCategoryCreate';
import JobCategoryEdit from './JobCategory/JobCategoryEdit';
import JobCategoryShow from './JobCategory/JobCategoryShow';

import DepartmentList from './Department/DepartmentList';
import DepartmentCreate from './Department/DepartmentCreate';
import DepartmentEdit from './Department/DepartmentEdit';
import DepartmentShow from './Department/DepartmentShow';

import PersonnelList from './Personnel/PersonnelList';
import PersonnelCreate from './Personnel/PersonnelCreate';
import PersonnelEdit from './Personnel/PersonnelEdit';
import PersonnelShow from './Personnel/PersonnelShow';

import PersonnelJobCategoryList from './PersonnelJobCategory/PersonnelJobCategoryList';
import PersonnelJobCategoryCreate from './PersonnelJobCategory/PersonnelJobCategoryCreate';
import PersonnelJobCategoryEdit from './PersonnelJobCategory/PersonnelJobCategoryEdit';
import PersonnelJobCategoryShow from './PersonnelJobCategory/PersonnelJobCategoryShow';

import TypeWrList from './TypeWr/TypeWrList';
import TypeWrCreate from './TypeWr/TypeWrCreate';
import TypeWrEdit from './TypeWr/TypeWrEdit';
import TypeWrShow from './TypeWr/TypeWrShow';

import DelayList from './Delay/DelayList';
import DelayCreate from './Delay/DelayCreate';
import DelayEdit from './Delay/DelayEdit';
import DelayShow from './Delay/DelayShow';

import WorkPriorityList from './WorkPriority/WorkPriorityList';
import WorkPriorityCreate from './WorkPriority/WorkPriorityCreate';
import WorkPriorityEdit from './WorkPriority/WorkPriorityEdit';
import WorkPriorityShow from './WorkPriority/WorkPriorityShow';

import SupplierList from './Supplier/SupplierList';
import SupplierCreate from './Supplier/SupplierCreate';
import SupplierEdit from './Supplier/SupplierEdit';
import SupplierShow from './Supplier/SupplierShow';

import SupplierSpecificList from './SupplierSpecific/SupplierSpecificList';
import SupplierSpecificCreate from './SupplierSpecific/SupplierSpecificCreate';
import SupplierSpecificEdit from './SupplierSpecific/SupplierSpecificEdit';
import SupplierSpecificShow from './SupplierSpecific/SupplierSpecificShow';

import SupplierSpecificDataList from './SupplierSpecificData/SupplierSpecificDataList';
import SupplierSpecificDataCreate from './SupplierSpecificData/SupplierSpecificDataCreate';
import SupplierSpecificDataEdit from './SupplierSpecificData/SupplierSpecificDataEdit';
import SupplierSpecificDataShow from './SupplierSpecificData/SupplierSpecificDataShow';

import AssetClassTaskList from './AssetClassTask/AssetClassTaskList';
import AssetClassTaskCreate from './AssetClassTask/AssetClassTaskCreate';
import AssetClassTaskEdit from './AssetClassTask/AssetClassTaskEdit';
import AssetClassTaskShow from './AssetClassTask/AssetClassTaskShow';
import AssetClassTaskAddCreate from './AssetClassTask/AssetClassTaskAddCreate';

import WorkRequestList from './WorkRequest/WorkRequestList';
import {WorkRequestCreate} from './WorkRequest/WorkRequestCreate';
import WorkRequestEdit from './WorkRequest/WorkRequestEdit';
import WorkRequestShow from './WorkRequest/WorkRequestShow';

import WOSupplierList from './WOSupplier/WOSupplierList';
import WOSupplierCreate from './WOSupplier/WOSupplierCreate';
import WOSupplierEdit from './WOSupplier/WOSupplierEdit';
import WOSupplierShow from './WOSupplier/WOSupplierShow';

import WOPersonnelList from './WOPersonnel/WOPersonnelList';
import WOPersonnelCreate from './WOPersonnel/WOPersonnelCreate';
import WOPersonnelEdit from './WOPersonnel/WOPersonnelEdit';
import WOPersonnelShow from './WOPersonnel/WOPersonnelShow';

import WODelayList from './WODelay/WODelayList';
import WODelayCreate from './WODelay/WODelayCreate';
import WODelayEdit from './WODelay/WODelayEdit';
import WODelayShow from './WODelay/WODelayShow';

import WOSparePartList from './WOSparePart/WOSparePartList';
import WOSparePartCreate from './WOSparePart/WOSparePartCreate';
import WOSparePartEdit from './WOSparePart/WOSparePartEdit';
import WOSparePartShow from './WOSparePart/WOSparePartShow';

import WOTaskList from './WOTask/WOTaskList';
import WOTaskCreate from './WOTask/WOTaskCreate';
import WOTaskEdit from './WOTask/WOTaskEdit';
import WOTaskShow from './WOTask/WOTaskShow';

import customRoutes from './customRoutes';


const messages = {
    'fa': farsiMessages,
};

//customRoutes={customRoutes} loginPage={MyLoginPage} authProvider={authProvider} dataProvider={drfProvider('http://127.0.0.1:8000')}

const theme = createMuiTheme({
    palette: {
    primary: {
      main: '#243261',
    },
    secondary: {
      main: '#243261',
    },
  },
    overrides: {
        MuiDrawer: {
            docked: {
                backgroundColor: '#FFFFFF !important',
                boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
            },
            paperAnchorLeft:{
               left: 'auto',
               right: '0',
            },
            paperAnchorRight:{
                right: 'auto',
                left: '0',
            },
        },
        RaAppBar:{
            toolbar:{
                    paddingRight: '0px'
            },
            menuButton:{
                    marginRight: '5px'
            },
        },
        MuiTypography:{
            root:{
                textAlign: "right !important",
                fontFamily: ' !important',
            },
            h6:{
               fontFamily: ' !important',
            },
            body1:{
                fontFamily: ' !important',
            },
            body2:{
                textAlign: "right !important",
                fontFamily: ' !important',
            },
        },
        MuiTableCell:{
            root:{
                textAlign: "right",
                fontFamily: ' !important',
            },
            sizeSmall:{
                "&:last-child": {
                    paddingRight: '10px'
                  },
            },
        },
        MuiFormLabel:{
            root:{
                fontFamily: ' !important',
            },
        },
        MuiMenuItem:{
            root:{
               fontFamily: ' !important',
            },
        },
        MuiInputLabel:{
            marginDense:{
                transform: "translate(40%, 17px) scale(1) !important",
                left: '35%',
            },
            shrink:{
                transform: "translate(65%, 7px) scale(0.75) !important",
            },
            root:{
               fontFamily: ' !important',
            },
        },
        MuiSelect:{
            iconFilled:{
                right: '85%',
            },
        },
        MuiButton:{
            root:{
                fontFamily: ' !important',
            },
        },
        MuiTablePagination:{
            root:{
                textAlign: "right !important",
            },
            caption:{
                textAlign: "right !important",
            },
        },
        RaButton:{
            label:{
                fontFamily: '!important',
            },
        },
        ReselectInput:{
            input:{
                minWidth: '256px',
            },
        },
        MuiInputBase:{
            root:{
                fontFamily: ' !important',
            },
        },
        MuiFormControl:{
            marginDense:{
                marginRight: '80px'
            },
        },
        MuiTab:{
            root:{
                fontFamily: ' !important',
            },
        },
    },
});

const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'fa');


const App = () => (
    <Admin disableTelemetry theme={theme} loginPage={MyLoginPage} layout={(props) => <Layout {...props} menu={TreeMenu}  />} customReducers={{ tree }} catchAll={NotFound} dashboard={Dashboard} title="PMWorks_II" dataProvider={drfProvider('http://127.0.0.1:8000')} i18nProvider={i18nProvider} >
        <Resource name="modiriat" icon={ListIcon} options={{ "label": "مدیریت کارها", "isMenuParent": true }} />
        <Resource name="barnamenet" icon={ListIcon} options={{ "label": "برنامه‌ریزی نت", "isMenuParent": true }} />
        <Resource name="tajhiz" icon={ListIcon} options={{ "label": "مدیریت تجهیزات", "isMenuParent": true }} />
        <Resource name="gozaresh" icon={ListIcon} options={{ "label": "گزارشات", "isMenuParent": true }} />
        <Resource name="standard" icon={ListIcon} options={{ "label": "استاندارسازی نت", "isMenuParent": true }} />
        <Resource name="makan" icon={ListIcon} options={{ "label": "مدیریت مکان", "isMenuParent": true }} />
        <Resource name="fani" icon={ListIcon} options={{ "label": "آرشیو فنی", "isMenuParent": true }} />
        <Resource name="paye" icon={ListIcon} options={{ "label": "تنظیمات پایه", "isMenuParent": true }} />
        <Resource name="PMWorks/AssetCategory" icon={SettingsOutlinedIcon} options={{ label: 'گروه خانواده تجهیز', "menuParent": "standard" }} list={AssetcategoryList} edit={AssetcategoryEdit} create={AssetcategoryCreate}  />
        <Resource name="PMWorks/AssetClass" icon={SettingsOutlinedIcon} options={{ label: 'خانواده تجهیز', "menuParent": "standard" }} list={AssetClassList} edit={AssetClassEdit} create={AssetClassCreate} show={AssetClassShow}/>
        <Resource name="PMWorks/SpecificData" icon={SettingsOutlinedIcon} options={{ label: 'ویژگی های خانواده تجهیز', "menuParent": "standard"}} list={SpecificDataList} edit={SpecificDataEdit} create={SpecificDataCreate}/>
        <Resource name="PMWorks/AssetClassSpecificData"  edit={AssetClassSpecificDataEdit} create={AssetClassSpecificDataCreate} show={AssetClassSpecificDataShow} />
        <Resource name="PMWorks/FailureMode" icon={SettingsOutlinedIcon} options={{ label: 'نوع خرابی', "menuParent": "paye" }} edit={FailureModeEdit} create={FailureModeCreate} show={FailureModeShow} />
        <Resource name="PMWorks/AssetClassSubdivision" edit={AssetClassSubdivisionEdit} create={AssetClassSubdivisionCreate} show={AssetClassSubdivisionShow} />
        <Resource name="PMWorks/Location" icon={SettingsOutlinedIcon} options={{ label: 'مکان ها', "menuParent": "makan"}} list={LocationList} edit={LocationEdit} create={LocationCreate} show={LocationShow}/>
        <Resource name="PMWorks/AssetPriority" icon={SettingsOutlinedIcon} options={{ label: 'اولویت‌بندی تجهیزات', "menuParent": "tajhiz" }} list={AssetPriorityList} edit={AssetPriorityEdit} create={AssetPriorityCreate} show={AssetPriorityShow}/>
        <Resource name="PMWorks/Document" icon={SettingsOutlinedIcon} options={{ label: 'فایل ها', "menuParent": "paye"}} list={DocumentList} edit={DocumentEdit} create={DocumentCreate} show={DocumentShow}/>
        <Resource name="PMWorks/AssetClassDocument" icon={ListIcon} options={{ label: 'فایل های کلاس تجهیز'}} edit={AssetClassDocumentEdit} create={AssetClassDocumentCreate} show={AssetClassDocumentShow}/>
        <Resource name="PMWorks/Asset" icon={ListIcon} options={{ label: 'تجهیزات فرعی'}} edit={AssetEdit} create={AssetCreate} show={AssetShow}/>
        <Resource name="PMWorks/AssetSubdivision" icon={SettingsOutlinedIcon} options={{ label: 'تجهیزات', "menuParent": "tajhiz" }} list={AssetSubdivisionList} edit={AssetSubdivisionEdit} show={AssetSubdivisionShow}/>
        <Resource name="PMWorks/AssetSpecificData" icon={ListIcon} options={{ label: 'ویژگی تجهیزات'}} edit={AssetSpecificDataEdit} show={AssetSpecificDataShow}/>
        <Resource name="PMWorks/AssetSubdivisionSparePart" icon={ListIcon} options={{ label: 'قطعات تجهیز'}} edit={AssetSubdivisionSparePartEdit} create={AssetSubdivisionSparePartCreate} show={AssetSubdivisionSparePartShow}/>
        <Resource name="PMWorks/SparePartDimension" icon={SettingsOutlinedIcon} options={{ label: 'سطح قطعات', "menuParent": "paye"}} list={SparePartDimensionList} edit={SparePartDimensionEdit} create={SparePartDimensionCreate} show={SparePartDimensionShow}/>
        <Resource name="PMWorks/SparePartCategory" icon={SettingsOutlinedIcon} options={{ label: 'خانواده قطعات', "menuParent": "paye"}} list={SparePartCategoryList} edit={SparePartCategoryEdit} create={SparePartCategoryCreate} show={SparePartCategoryShow}/>
        <Resource name="PMWorks/SparePart" icon={SettingsOutlinedIcon} options={{ label: 'قطعات یدکی', "menuParent": "standard" }} list={SparePartList} edit={SparePartEdit} create={SparePartCreate} show={SparePartShow}/>
        <Resource name="PMWorks/TaskType" icon={SettingsOutlinedIcon} options={{ label: 'وظایف', "menuParent": "paye"}} list={TaskTypeList} edit={TaskTypeEdit} create={TaskTypeCreate} show={TaskTypeShow}/>
        <Resource name="PMWorks/JobCategory" icon={SettingsOutlinedIcon} options={{ label: 'شغل', "menuParent": "paye"}} list={JobCategoryList} edit={JobCategoryEdit} create={JobCategoryCreate} show={JobCategoryShow}/>
        <Resource name="PMWorks/Department" icon={SettingsOutlinedIcon} options={{ label: 'دپارتمان', "menuParent": "paye"}} list={DepartmentList} edit={DepartmentEdit} create={DepartmentCreate} show={DepartmentShow}/>
        <Resource name="PMWorks/Personnel" icon={SettingsOutlinedIcon} options={{ label: 'پرسنل', "menuParent": "paye"}} list={PersonnelList} edit={PersonnelEdit} create={PersonnelCreate} show={PersonnelShow}/>
        <Resource name="PMWorks/PersonnelJobCategory" icon={SettingsOutlinedIcon} options={{ label: 'شغل پرسنل'}} edit={PersonnelJobCategoryEdit} create={PersonnelJobCategoryCreate} show={PersonnelJobCategoryShow}/>
        <Resource name="PMWorks/TypeWr" icon={SettingsOutlinedIcon} options={{ label: 'انواع درخواست کار', "menuParent": "paye"}} list={TypeWrList} edit={TypeWrEdit} create={TypeWrCreate} show={TypeWrShow}/>
        <Resource name="PMWorks/Delay" icon={SettingsOutlinedIcon} options={{ label: 'تاخیرات', "menuParent": "paye"}} list={DelayList} edit={DelayEdit} create={DelayCreate} show={DelayShow}/>
        <Resource name="PMWorks/WorkPriority" icon={SettingsOutlinedIcon} options={{ label: 'اولویت درخواست کار', "menuParent": "paye"}} list={WorkPriorityList} edit={WorkPriorityEdit} create={WorkPriorityCreate} show={WorkPriorityShow}/>
        <Resource name="PMWorks/Supplier" icon={ListIcon} options={{ label: 'تامین کنندگان'}} list={SupplierList} edit={SupplierEdit} create={SupplierCreate} show={SupplierShow}/>
        <Resource name="PMWorks/SupplierSpecific" icon={ListIcon} options={{ label: 'ویژگی تامین کنندگان'}} list={SupplierSpecificList} edit={SupplierSpecificEdit} create={SupplierSpecificCreate} show={SupplierSpecificShow}/>
        <Resource name="PMWorks/SupplierSpecificData" icon={ListIcon} options={{ label: 'ویژگی های تامین کنندگان'}} edit={SupplierSpecificDataEdit} create={SupplierSpecificDataCreate} show={SupplierSpecificDataShow}/>
        <Resource name="PMWorks/AssetClassTask" icon={ListIcon} options={{ label: 'فعالیت ها'}} list={AssetClassTaskList} edit={AssetClassTaskEdit} create={AssetClassTaskCreate} show={AssetClassTaskShow}/>
        <Resource name="PMWorks/AssetClassTaskAdd" icon={ListIcon} options={{ label: 'فعالیت های فرعی'}} create={AssetClassTaskAddCreate} />
        <Resource name="PMWorks/WorkRequest" icon={SettingsOutlinedIcon} options={{ label: 'درخواست کار', "menuParent": "modiriat" }} list={WorkRequestList} create={WorkRequestCreate} />
        <Resource name="PMWorks/WOSupplier" icon={ListIcon} options={{ label: 'تامین کننده دستور کارها'}} edit={WOSupplierEdit} create={WOSupplierCreate} show={WOSupplierShow}/>
        <Resource name="PMWorks/WOPersonnel" icon={ListIcon} options={{ label: 'پرسنل دستور کارها'}} edit={WOPersonnelEdit} create={WOPersonnelCreate} show={WOPersonnelShow}/>
        <Resource name="PMWorks/WODelay" icon={ListIcon} options={{ label: 'تاخیرات دستور کارها'}} edit={WODelayEdit} create={WODelayCreate} show={WODelayShow}/>
        <Resource name="PMWorks/WOSparePart" icon={ListIcon} options={{ label: 'قطعات دستور کارها'}} edit={WOSparePartEdit} create={WOSparePartCreate} show={WOSparePartShow}/>
        <Resource name="PMWorks/WOTask" icon={ListIcon} options={{ label: 'وظایف دستور کارها'}} edit={WOTaskEdit} create={WOTaskCreate} show={WOTaskShow}/>

    </Admin>
);

export default App;
