import { defineAsyncComponent} from 'vue';
import replacementMap from './component-replacement-map.json';

/**
 * Looks like there is no way to get type from a dynamic import statement, so we have to stick with Vue's syntax and get the original component's type defination
 * https://github.com/microsoft/TypeScript/issues/26139
 */
const loadComponent: typeof defineAsyncComponent = (source) =>
{
    const regex = /import\(["|'|`](.*)["|'|`]\)/gm;
    const sourceUrl = regex.exec("" + source)?.[1] ?? "";
    const replacement:string = (replacementMap as any)[sourceUrl];
    if(replacement) {
        return defineAsyncComponent(() => import(/* @vite-ignore */replacement)) as any;
    } else {
        return defineAsyncComponent(source);
    }
}

export default loadComponent;