export type ScreenTypes = {
    Login: undefined
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends ScreenTypes { }
    }
}