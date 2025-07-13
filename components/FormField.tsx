import React from 'react'
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, Controller , FieldValues, Path } from 'react-hook-form'


interface FormFieldProps<T extends FieldValues > {
    control : Control<T>;
    name :Path<T>;
    label : string;
    placeholder?:string;
    type?: 'text' | 'email' | 'password' | 'file'

}


const FormField = ({ control , name , label , placeholder , type = 'text'}: FormFieldProps<T>) => {
  return (
   
    <Controller   
     name={name} 
     control={control} 
     render={({ field }) => (
             <FormItem>
              <FormLabel className='label'>{label}</FormLabel>
              <FormControl>
                <Input
                 placeholder={placeholder} {...field} 
                  type={type}/>
              </FormControl>
              <FormDescription>
                {label === "Name" ? "This will be pulically displayed name":""}
              </FormDescription>
              <FormMessage />
            </FormItem>
) } 
      
         
        />
  )
}

export default FormField
