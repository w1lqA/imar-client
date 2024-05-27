import React, { useState } from 'react';
import axios from 'axios'
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';

const ContactForm = ({emailType}) => {
    const {t} = useTranslation();
    const contactForm = t("contactForm");
    const [errorMessage, setErrorMessage] = useState(0);

    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [checkboxState, setCheckboxState] = useState(false);

    function sendEmail() {
      console.log("Sending Email");
      if (userEmail && userName && message && checkboxState) {
        axios
          .post("http://95.163.223.96:5000/api/sendEmail", {
            userEmail, userName, message, emailType

          })
          .then(() =>  setErrorMessage(3))
          .catch(() => setErrorMessage(4));
        return;
      }
      if (!(userEmail && userName && message)){return setErrorMessage(1)}
      else if (!checkboxState){return setErrorMessage(2)}
      
    }

    return (
    <div className="space-y-4">
        <div className='flex flex-row justify-between items-center space-x-6'>
            <input onChange={e => setUserName(e.target.value)} type="text" id="name" name="name" className="text-[#757575] border bg-white py-2 text-sm w-full font-normal leading-8 outline-none focus:ring-transparent" placeholder={t("contactForm.labelName")} />
            <input onChange={e => setUserEmail(e.target.value)} type="text" id="email" name="email" className="text-[#757575] border bg-white py-2 text-sm w-full font-normal leading-8 outline-none focus:ring-transparent"  placeholder={t("contactForm.labelEmail")}  />
        </div>
        <textarea
        onChange={e => setMessage(e.target.value)}
            rows="5"
            id="message"
            name="message"
            className="text-[#757575] resize-y border bg-white py-2 text-sm w-full font-normal leading-8 outline-none focus:ring-transparent"
            placeholder="">
        </textarea>

        <div className='flex flex-row flex-wrap items-center justify-between'>
            <div className="py-2 flex items-center">
                <input onClick={() => setCheckboxState(!checkboxState)} type="checkbox" id="agreement" name="agreement" className="hover:opacity-70 transition-all ease-in-out hover:scale-95 duration-150 mr-2 bg-[#DFDFDF] focus:ring-transparent checked:ring-transparent" />
                <label htmlFor="agreement" className="text-[#DFDFDF] text-sm">{t("contactForm.agreement")}</label>
            </div>
            
            <div className="py-2 flex justify-end">
                <button onClick={() => sendEmail()} class="flex flex-row group items-center font-rubik border-[3px] border-white text-sm text-white px-4 py-2 font-bold text-center tracking-[4px] uppercase">
                  {t("contactForm.button")}
                  <FaArrowRight className='-ml-3 opacity-0 group-hover:ml-3 group-hover:opacity-100 transition-all ease-in-out duration-300'/>
                </button>
            </div>
        </div>
        <h3 className={`text-sm ${errorMessage === 3 ? 'text-green-400 ' : 'text-red-400 '}`}>{ contactForm.errorMessages[errorMessage] }</h3>
    </div>
  );
};

export default ContactForm;
