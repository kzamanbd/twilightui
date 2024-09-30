export type VerticalMenuType = {
    name: string;
    href: string;
    icon: string;
    children?: {
        name: string;
        href: string;
    }[];
};
