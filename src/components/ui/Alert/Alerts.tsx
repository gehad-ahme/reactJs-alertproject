import {X } from 'lucide-react';
import "./index.scss";
import { ReactNode } from 'react';
import { AlertTypes } from '../../../types';

interface IProps {
    type:AlertTypes;
    icons:ReactNode;
    title:string;
    description?:string;
    children?:ReactNode;
}

const Alerts=({type,icons,title,description,children}:IProps) => {
    return (
        <div className={type}>
            <div className='alert-header'>
                <div className='title'>
             <span>{icons}</span>
            <h3>{title}</h3>
            </div>
             <X className='closs' size={25} />
             </div>

            {children? children :<p>{description}</p>}
        </div>
    )

}

export default Alerts;