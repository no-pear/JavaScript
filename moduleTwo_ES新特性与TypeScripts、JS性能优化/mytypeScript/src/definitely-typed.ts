import {camelCase} from 'lodash'

declare function camlCase(input: string): string 

const res = camelCase('hello typed')
console.log("res", res)