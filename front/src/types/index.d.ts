declare namespace Layouts {
    interface IState {
        icon: string
        url: string
        text?: string
    }
}

declare namespace Stores {
    interface StoreState {
        loading?: boolean
        to?: boolean
        from?: string
    }
}

declare namespace CommonComponent {
    interface PrivateRouteProps {
        component: any
        location: any
        isAuthenticated: () => boolean
    }

    interface IconText {
        icon: any
        text: string
    }

    interface RecommendView {
        href?: string
        title: string
        description: string
        imgUrl?: string
        linkUrl?: string
    }

    interface Navigation {
        title?: string
        key?: string
    }
}

declare namespace Home {}
