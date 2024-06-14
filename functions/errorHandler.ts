import { toast } from 'react-hot-toast';
import { AxiosResponse } from 'axios';

export const errorHandler = (error: AxiosResponse) => {
    const errorMessage = error.data
    if (error.status === 500) return toast.error('مشکلی پیش آمده')
    Object?.keys(errorMessage).forEach((key) => {
        if (typeof errorMessage[key] === 'string') {
            toast.error(errorMessage)
        } else if (typeof errorMessage[key][0] === 'string') {
            toast.error(errorMessage[key][0])
        }
        else {
            toast.error("مشکلی پیش آمده")
        }
    })
}