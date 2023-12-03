import { FaUserPlus } from "react-icons/fa6";
import { TbListSearch } from "react-icons/tb";
import { BiSolidCategory } from "react-icons/bi";

export enum HeaderMenuEnum {
    Admin = 1,
    Product,
}

export enum HeaderMenuListAdminEnum {
    List = 1,
    New,
}

export enum HeaderMenuListProductEnum {
    CategoryList = 1,
    CategoryNew,
}

export const headerMenuList = [
    {
        key: HeaderMenuEnum.Admin,
        title: '管理者',
        Lists: [
            {
                key: HeaderMenuListAdminEnum.List,
                title: '管理者一覧',
                href: '/',
                icon: <TbListSearch />,
            },
            {
                key: HeaderMenuListAdminEnum.New,
                title: '管理者登録',
                href: '/',
                icon: <FaUserPlus  />,
            },
        ]
    },
    {
        key: HeaderMenuEnum.Product,
        title: '商品',
        Lists: [
            {
                key: HeaderMenuListProductEnum.CategoryList,
                title: 'カテゴリ一覧',
                href: '/',
                icon: <TbListSearch />,
            },
            {
                key: HeaderMenuListProductEnum.CategoryNew,
                title: 'カテゴリ登録',
                href: '/',
                icon: <BiSolidCategory  />,
            },
        ]
    },
]