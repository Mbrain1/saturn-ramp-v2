import { toast } from "react-toastify";

export const copyText = (text) => {

	 const textField = document.createElement('textarea')
    textField.innerText = text //Text to be copied
    document.body.appendChild(textField)

    if (window.navigator.platform === 'iPhone') {
      textField.setSelectionRange(0, 99999);
    } else {
      textField.select();
    }

    document.execCommand('copy')
    textField.remove()

                toast['success']("Copied to clipboard!",{
                        theme: 'dark',
                        progress: undefined,
                        position: 'bottom-center',
                        hideProgressBar: true,
                        pauseOnHover: false,
                        autoClose: 2000,
                        closeOnClick: true,
                        draggable: false
                    })
         
}

export const alert = (text, type = 'success') => {

            toast[type](text,{
                        theme: 'dark',
                        progress: undefined,
                        position: 'bottom-center',
                        hideProgressBar: true,
                        pauseOnHover: false,
                        autoClose: 2000,
                        closeOnClick: true,
                        draggable: false
                    })
}