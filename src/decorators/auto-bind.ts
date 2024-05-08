export function autobind(target: any, methodName: string, decriptor: PropertyDescriptor){
    const original = decriptor.value
    const adjDescriptor : PropertyDescriptor = {
        configurable: true,
        get(){
            const bndFn = original.bind(this);
            return bndFn;
        }
    }
    return adjDescriptor 
}