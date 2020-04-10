declare namespace Layouts {
    interface IState {
        icon: string
        url: string
        text?: string
    }
}

declare namespace CommonComponent {
    interface PrivateRouteProps {
        component: any
        location: any
        isAuthenticated: () => boolean
    }
}

declare namespace Home {}
