
export type INavItem = {
    text: string;
    link: string;
    subMenu?: INavSubMenu;
}

export type INavSubMenu = Array<{ text: string, link: string}>;
export const navData: INavItem[] = [
    {
        text: "Anasayfa",
        link: "/"
    },
    {
        text: "Hakkimizda",
        link: "/about"
    },
    {
        text: "Urunler",
        link: "/products",
        subMenu: [{
            text: "kurumsal websitesi",
            link: "/kweb"
        },{
            text: "kurumsal eposta",
            link: "/kurumsal_posta"
        }]
    },
    {
        text: "Hizmetler",
        link: "/services"
    }
] 

