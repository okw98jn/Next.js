import { FaUserPlus } from "react-icons/fa6";
import { TbListSearch } from "react-icons/tb";
import { BiSolidCategory } from "react-icons/bi";

//ヘッダー情報
enum HeaderMenu {
    Admin = 1,
    Product,
}

enum HeaderMenuListAdmin {
    List = 1,
    New,
}

enum HeaderMenuListProduct {
    CategoryList = 1,
    CategoryNew,
}

export const headerMenuList = [
    {
        key: HeaderMenu.Admin,
        title: '管理者',
        Lists: [
            {
                key: HeaderMenuListAdmin.List,
                title: '管理者一覧',
                href: '/admin/admin/list',
                icon: <TbListSearch />,
            },
            {
                key: HeaderMenuListAdmin.New,
                title: '管理者登録',
                href: '/admin/admin/new',
                icon: <FaUserPlus  />,
            },
        ]
    },
    {
        key: HeaderMenu.Product,
        title: '商品',
        Lists: [
            {
                key: HeaderMenuListProduct.CategoryList,
                title: 'カテゴリ一覧',
                href: '/',
                icon: <TbListSearch />,
            },
            {
                key: HeaderMenuListProduct.CategoryNew,
                title: 'カテゴリ登録',
                href: '/',
                icon: <BiSolidCategory  />,
            },
        ]
    },
]

//管理者テーブル情報
export const AdminTheadInfo = [
    'No',
    '氏名',
    'ログインID',
    '権限',
    'ステータス',
    '登録日',
    '',
];

//管理者権限
export enum AdminRole {
    Admin  = '0',
    Normal = '1',
}

export const AdminRoleList = [
    {
        value: AdminRole.Admin,
        text: '管理者',
    },
    {
        value: AdminRole.Normal,
        text: '一般',
    },
]

//管理者ステータス
export enum AdminStatus {
    StatusValid   = '0',
    StatusInValid = '1',
}

export const AdminStatusList = [
    {
        value: AdminStatus.StatusValid,
        text: '管理者',
    },
    {
        value: AdminStatus.StatusInValid,
        text: '一般',
    },
]