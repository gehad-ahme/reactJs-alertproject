import Alerts from "./components/ui/Alert/Alerts";
import {Ban,Info,AlertTriangle,CheckCheck,Bell } from 'lucide-react';

const App=() => {
    return (
        <div>
          <Alerts type={"alert-danger"} icons={<Ban size={20} />} title={"Something went wrong"} description="Lorem ipsum dolor sit amet,
           consectetur adipisicing elit. Corporis necessitatibus eos illum
           reprehenderit numquam mollitia beatae quos tenetur dignissimos molestiae."/>
           <Alerts type={"alert-default"} icons={<Bell size={20} />} title={"Upgrade your plan"} description="Lorem ipsum dolor sit amet,
           consectetur adipisicing elit. Corporis necessitatibus eos illum
           reprehenderit numquam mollitia beatae quos tenetur dignissimos molestiae."/>
           <Alerts type={"alert-info"} icons={<Info size={20} />} title={"Note"} description="Lorem ipsum dolor sit amet,
           consectetur adipisicing elit. Corporis necessitatibus eos illum
           reprehenderit numquam mollitia beatae quos tenetur dignissimos molestiae."/>
           <Alerts type={"alert-warning"} icons={<AlertTriangle size={20} />} title={"Tips & Tricks"} description="Lorem ipsum dolor sit amet,
           consectetur adipisicing elit. Corporis necessitatibus eos illum
           reprehenderit numquam mollitia beatae quos tenetur dignissimos molestiae."/>
           <Alerts type={"alert-success"} icons={<CheckCheck size={20} />} title={"Your order has been processed"} description="Lorem ipsum dolor sit amet,
           consectetur adipisicing elit. Corporis necessitatibus eos illum
           reprehenderit numquam mollitia beatae quos tenetur dignissimos molestiae."/>
        </div>
    )

}

export default App;
