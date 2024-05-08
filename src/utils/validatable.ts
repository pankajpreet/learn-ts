
    export interface Validatable{
        value: string|number
        required : boolean
        minLength?: number
        maxLength?: number
        min?: number
        max? : number
    }
    
    export function validate(input: Validatable){
        let isValid = true;
        if(input.required && input.value.toString().trim.length !== 0){
            isValid = false;
        }
    
        if(input.minLength != null && typeof input.value === 'string' && input.value.length < input.minLength){
            isValid = false
        }
    
        if(input.maxLength != null && typeof input.value === 'string' && input.value.length > input.maxLength){
            isValid = false
        }
    
        if(input.min != null && typeof input.value === 'number' && input.value < input.min){
            isValid = false
        }
    
        // value of Zero in if check is not useful
        if(input.max != null && typeof input.value === 'number' && input.value > input.max){
            isValid = false
        }
    
        return isValid
    }
