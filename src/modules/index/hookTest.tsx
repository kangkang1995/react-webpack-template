import React from "react";
// import {baseUrl} from "env";
// import doc11 from "@/assets/others/doc11.doc";
const HookTest = () => {
    const test = () => {
        const b = {
            a: 1,
        };

        return b?.a === 1 ? <div>1111</div> : <div>2222</div>;
    };
    const download = () => {
        // window.open(doc11);
    };
    return (
        <div>
            <div onClick={download}>我是react hook444</div>
            <div>{test()}</div>
        </div>
    );
};

export default HookTest;
