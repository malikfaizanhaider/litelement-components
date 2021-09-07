import type I2CIcon from '../icon/icon';
export declare type IconLibraryResolver = (name: string) => string;
export declare type IconLibraryMutator = (svg: SVGElement) => void;
export interface IconLibrary {
    name: string;
    resolver: IconLibraryResolver;
    mutator?: IconLibraryMutator;
}
export declare function watchIcon(icon: I2CIcon): void;
export declare function unwatchIcon(icon: I2CIcon): void;
export declare function getIconLibrary(name?: string): IconLibrary;
export declare function registerIconLibrary(name: string, options: {
    resolver: IconLibraryResolver;
    mutator?: IconLibraryMutator;
}): void;
export declare function unregisterIconLibrary(name: string): void;
