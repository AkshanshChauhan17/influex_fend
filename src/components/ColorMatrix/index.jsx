import { useEffect, useState } from "react"
import "./index.css"

export default function ColorMatrix({change, className}) {
    const [pattern, setPattern] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    useEffect(()=>{
        setPattern([Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2),Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2),Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2),Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2),Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2),Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2),Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2),Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2),Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2),Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2),Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2), Math.floor(Math.random()*2)]);
    }, [change]);

    return <svg id="Group_1" data-name="Group 1" className={className} xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 1000 1000">
        <rect id="Rectangle_1" data-name="Rectangle 1" width="100" height="100" fill={pattern[0] ? "#fff" : "#110"} />
        <rect id="Rectangle_11" data-name="Rectangle 11" width="100" height="100" transform="translate(0 100)" fill={pattern[1] ? "#fff" : "#110"} />
        <rect id="Rectangle_21" data-name="Rectangle 21" width="100" height="100" transform="translate(0 200)" fill={pattern[2] ? "#fff" : "#110"} />
        <rect id="Rectangle_31" data-name="Rectangle 31" width="100" height="100" transform="translate(0 300)" fill={pattern[3] ? "#fff" : "#110"} />
        <rect id="Rectangle_41" data-name="Rectangle 41" width="100" height="100" transform="translate(0 400)" fill={pattern[4] ? "#fff" : "#110"} />
        <rect id="Rectangle_51" data-name="Rectangle 51" width="100" height="100" transform="translate(0 500)" fill={pattern[5] ? "#fff" : "#110"} />
        <rect id="Rectangle_61" data-name="Rectangle 61" width="100" height="100" transform="translate(0 600)" fill={pattern[6] ? "#fff" : "#110"} />
        <rect id="Rectangle_71" data-name="Rectangle 71" width="100" height="100" transform="translate(0 700)" fill={pattern[7] ? "#fff" : "#110"} />
        <rect id="Rectangle_81" data-name="Rectangle 81" width="100" height="100" transform="translate(0 800)" fill={pattern[8] ? "#fff" : "#110"} />
        <rect id="Rectangle_91" data-name="Rectangle 91" width="100" height="100" transform="translate(0 900)" fill={pattern[9] ? "#fff" : "#110"} />
        <rect id="Rectangle_2" data-name="Rectangle 2" width="100" height="100" transform="translate(100)" fill={pattern[10] ? "#fff" : "#110"} />
        <rect id="Rectangle_12" data-name="Rectangle 12" width="100" height="100" transform="translate(100 100)" fill={pattern[11] ? "#fff" : "#110"} />
        <rect id="Rectangle_22" data-name="Rectangle 22" width="100" height="100" transform="translate(100 200)" fill={pattern[12] ? "#fff" : "#110"} />
        <rect id="Rectangle_32" data-name="Rectangle 32" width="100" height="100" transform="translate(100 300)" fill={pattern[13] ? "#fff" : "#110"} />
        <rect id="Rectangle_42" data-name="Rectangle 42" width="100" height="100" transform="translate(100 400)" fill={pattern[14] ? "#fff" : "#110"} />
        <rect id="Rectangle_52" data-name="Rectangle 52" width="100" height="100" transform="translate(100 500)" fill={pattern[15] ? "#fff" : "#110"} />
        <rect id="Rectangle_62" data-name="Rectangle 62" width="100" height="100" transform="translate(100 600)" fill={pattern[16] ? "#fff" : "#110"} />
        <rect id="Rectangle_72" data-name="Rectangle 72" width="100" height="100" transform="translate(100 700)" fill={pattern[17] ? "#fff" : "#110"} />
        <rect id="Rectangle_82" data-name="Rectangle 82" width="100" height="100" transform="translate(100 800)" fill={pattern[18] ? "#fff" : "#110"} />
        <rect id="Rectangle_92" data-name="Rectangle 92" width="100" height="100" transform="translate(100 900)" fill={pattern[19] ? "#fff" : "#110"} />
        <rect id="Rectangle_3" data-name="Rectangle 3" width="100" height="100" transform="translate(200)" fill={pattern[20] ? "#fff" : "#110"} />
        <rect id="Rectangle_13" data-name="Rectangle 13" width="100" height="100" transform="translate(200 100)" fill={pattern[21] ? "#fff" : "#110"} />
        <rect id="Rectangle_23" data-name="Rectangle 23" width="100" height="100" transform="translate(200 200)" fill={pattern[22] ? "#fff" : "#110"} />
        <rect id="Rectangle_33" data-name="Rectangle 33" width="100" height="100" transform="translate(200 300)" fill={pattern[23] ? "#fff" : "#110"} />
        <rect id="Rectangle_43" data-name="Rectangle 43" width="100" height="100" transform="translate(200 400)" fill={pattern[24] ? "#fff" : "#110"} />
        <rect id="Rectangle_53" data-name="Rectangle 53" width="100" height="100" transform="translate(200 500)" fill={pattern[25] ? "#fff" : "#110"} />
        <rect id="Rectangle_63" data-name="Rectangle 63" width="100" height="100" transform="translate(200 600)" fill={pattern[26] ? "#fff" : "#110"} />
        <rect id="Rectangle_73" data-name="Rectangle 73" width="100" height="100" transform="translate(200 700)" fill={pattern[27] ? "#fff" : "#110"} />
        <rect id="Rectangle_83" data-name="Rectangle 83" width="100" height="100" transform="translate(200 800)" fill={pattern[28] ? "#fff" : "#110"} />
        <rect id="Rectangle_93" data-name="Rectangle 93" width="100" height="100" transform="translate(200 900)" fill={pattern[29] ? "#fff" : "#110"} />
        <rect id="Rectangle_4" data-name="Rectangle 4" width="100" height="100" transform="translate(300)" fill={pattern[30] ? "#fff" : "#110"} />
        <rect id="Rectangle_14" data-name="Rectangle 14" width="100" height="100" transform="translate(300 100)" fill={pattern[31] ? "#fff" : "#110"} />
        <rect id="Rectangle_24" data-name="Rectangle 24" width="100" height="100" transform="translate(300 200)" fill={pattern[32] ? "#fff" : "#110"} />
        <rect id="Rectangle_34" data-name="Rectangle 34" width="100" height="100" transform="translate(300 300)" fill={pattern[33] ? "#fff" : "#110"} />
        <rect id="Rectangle_44" data-name="Rectangle 44" width="100" height="100" transform="translate(300 400)" fill={pattern[34] ? "#fff" : "#110"} />
        <rect id="Rectangle_54" data-name="Rectangle 54" width="100" height="100" transform="translate(300 500)" fill={pattern[35] ? "#fff" : "#110"} />
        <rect id="Rectangle_64" data-name="Rectangle 64" width="100" height="100" transform="translate(300 600)" fill={pattern[36] ? "#fff" : "#110"} />
        <rect id="Rectangle_74" data-name="Rectangle 74" width="100" height="100" transform="translate(300 700)" fill={pattern[37] ? "#fff" : "#110"} />
        <rect id="Rectangle_84" data-name="Rectangle 84" width="100" height="100" transform="translate(300 800)" fill={pattern[38] ? "#fff" : "#110"} />
        <rect id="Rectangle_94" data-name="Rectangle 94" width="100" height="100" transform="translate(300 900)" fill={pattern[39] ? "#fff" : "#110"} />
        <rect id="Rectangle_5" data-name="Rectangle 5" width="100" height="100" transform="translate(400)" fill={pattern[40] ? "#fff" : "#110"} />
        <rect id="Rectangle_15" data-name="Rectangle 15" width="100" height="100" transform="translate(400 100)" fill={pattern[41] ? "#fff" : "#110"} />
        <rect id="Rectangle_25" data-name="Rectangle 25" width="100" height="100" transform="translate(400 200)" fill={pattern[42] ? "#fff" : "#110"} />
        <rect id="Rectangle_35" data-name="Rectangle 35" width="100" height="100" transform="translate(400 300)" fill={pattern[43] ? "#fff" : "#110"} />
        <rect id="Rectangle_45" data-name="Rectangle 45" width="100" height="100" transform="translate(400 400)" fill={pattern[44] ? "#fff" : "#110"} />
        <rect id="Rectangle_55" data-name="Rectangle 55" width="100" height="100" transform="translate(400 500)" fill={pattern[45] ? "#fff" : "#110"} />
        <rect id="Rectangle_65" data-name="Rectangle 65" width="100" height="100" transform="translate(400 600)" fill={pattern[46] ? "#fff" : "#110"} />
        <rect id="Rectangle_75" data-name="Rectangle 75" width="100" height="100" transform="translate(400 700)" fill={pattern[47] ? "#fff" : "#110"} />
        <rect id="Rectangle_85" data-name="Rectangle 85" width="100" height="100" transform="translate(400 800)" fill={pattern[48] ? "#fff" : "#110"} />
        <rect id="Rectangle_95" data-name="Rectangle 95" width="100" height="100" transform="translate(400 900)" fill={pattern[49] ? "#fff" : "#110"} />
        <rect id="Rectangle_6" data-name="Rectangle 6" width="100" height="100" transform="translate(500)" fill={pattern[50] ? "#fff" : "#110"} />
        <rect id="Rectangle_16" data-name="Rectangle 16" width="100" height="100" transform="translate(500 100)" fill={pattern[51] ? "#fff" : "#110"} />
        <rect id="Rectangle_26" data-name="Rectangle 26" width="100" height="100" transform="translate(500 200)" fill={pattern[52] ? "#fff" : "#110"} />
        <rect id="Rectangle_36" data-name="Rectangle 36" width="100" height="100" transform="translate(500 300)" fill={pattern[53] ? "#fff" : "#110"} />
        <rect id="Rectangle_46" data-name="Rectangle 46" width="100" height="100" transform="translate(500 400)" fill={pattern[54] ? "#fff" : "#110"} />
        <rect id="Rectangle_56" data-name="Rectangle 56" width="100" height="100" transform="translate(500 500)" fill={pattern[55] ? "#fff" : "#110"} />
        <rect id="Rectangle_66" data-name="Rectangle 66" width="100" height="100" transform="translate(500 600)" fill={pattern[56] ? "#fff" : "#110"} />
        <rect id="Rectangle_76" data-name="Rectangle 76" width="100" height="100" transform="translate(500 700)" fill={pattern[57] ? "#fff" : "#110"} />
        <rect id="Rectangle_86" data-name="Rectangle 86" width="100" height="100" transform="translate(500 800)" fill={pattern[58] ? "#fff" : "#110"} />
        <rect id="Rectangle_96" data-name="Rectangle 96" width="100" height="100" transform="translate(500 900)" fill={pattern[59] ? "#fff" : "#110"} />
        <rect id="Rectangle_7" data-name="Rectangle 7" width="100" height="100" transform="translate(600)" fill={pattern[60] ? "#fff" : "#110"} />
        <rect id="Rectangle_17" data-name="Rectangle 17" width="100" height="100" transform="translate(600 100)" fill={pattern[61] ? "#fff" : "#110"} />
        <rect id="Rectangle_27" data-name="Rectangle 27" width="100" height="100" transform="translate(600 200)" fill={pattern[62] ? "#fff" : "#110"} />
        <rect id="Rectangle_37" data-name="Rectangle 37" width="100" height="100" transform="translate(600 300)" fill={pattern[63] ? "#fff" : "#110"} />
        <rect id="Rectangle_47" data-name="Rectangle 47" width="100" height="100" transform="translate(600 400)" fill={pattern[64] ? "#fff" : "#110"} />
        <rect id="Rectangle_57" data-name="Rectangle 57" width="100" height="100" transform="translate(600 500)" fill={pattern[65] ? "#fff" : "#110"} />
        <rect id="Rectangle_67" data-name="Rectangle 67" width="100" height="100" transform="translate(600 600)" fill={pattern[66] ? "#fff" : "#110"} />
        <rect id="Rectangle_77" data-name="Rectangle 77" width="100" height="100" transform="translate(600 700)" fill={pattern[67] ? "#fff" : "#110"} />
        <rect id="Rectangle_87" data-name="Rectangle 87" width="100" height="100" transform="translate(600 800)" fill={pattern[68] ? "#fff" : "#110"} />
        <rect id="Rectangle_97" data-name="Rectangle 97" width="100" height="100" transform="translate(600 900)" fill={pattern[69] ? "#fff" : "#110"} />
        <rect id="Rectangle_8" data-name="Rectangle 8" width="100" height="100" transform="translate(700)" fill={pattern[70] ? "#fff" : "#110"} />
        <rect id="Rectangle_18" data-name="Rectangle 18" width="100" height="100" transform="translate(700 100)" fill={pattern[71] ? "#fff" : "#110"} />
        <rect id="Rectangle_28" data-name="Rectangle 28" width="100" height="100" transform="translate(700 200)" fill={pattern[72] ? "#fff" : "#110"} />
        <rect id="Rectangle_38" data-name="Rectangle 38" width="100" height="100" transform="translate(700 300)" fill={pattern[73] ? "#fff" : "#110"} />
        <rect id="Rectangle_48" data-name="Rectangle 48" width="100" height="100" transform="translate(700 400)" fill={pattern[74] ? "#fff" : "#110"} />
        <rect id="Rectangle_58" data-name="Rectangle 58" width="100" height="100" transform="translate(700 500)" fill={pattern[75] ? "#fff" : "#110"} />
        <rect id="Rectangle_68" data-name="Rectangle 68" width="100" height="100" transform="translate(700 600)" fill={pattern[76] ? "#fff" : "#110"} />
        <rect id="Rectangle_78" data-name="Rectangle 78" width="100" height="100" transform="translate(700 700)" fill={pattern[77] ? "#fff" : "#110"} />
        <rect id="Rectangle_88" data-name="Rectangle 88" width="100" height="100" transform="translate(700 800)" fill={pattern[78] ? "#fff" : "#110"} />
        <rect id="Rectangle_98" data-name="Rectangle 98" width="100" height="100" transform="translate(700 900)" fill={pattern[79] ? "#fff" : "#110"} />
        <rect id="Rectangle_9" data-name="Rectangle 9" width="100" height="100" transform="translate(800)" fill={pattern[80] ? "#fff" : "#110"} />
        <rect id="Rectangle_19" data-name="Rectangle 19" width="100" height="100" transform="translate(800 100)" fill={pattern[81] ? "#fff" : "#110"} />
        <rect id="Rectangle_29" data-name="Rectangle 29" width="100" height="100" transform="translate(800 200)" fill={pattern[82] ? "#fff" : "#110"} />
        <rect id="Rectangle_39" data-name="Rectangle 39" width="100" height="100" transform="translate(800 300)" fill={pattern[83] ? "#fff" : "#110"} />
        <rect id="Rectangle_49" data-name="Rectangle 49" width="100" height="100" transform="translate(800 400)" fill={pattern[84] ? "#fff" : "#110"} />
        <rect id="Rectangle_59" data-name="Rectangle 59" width="100" height="100" transform="translate(800 500)" fill={pattern[85] ? "#fff" : "#110"} />
        <rect id="Rectangle_69" data-name="Rectangle 69" width="100" height="100" transform="translate(800 600)" fill={pattern[86] ? "#fff" : "#110"} />
        <rect id="Rectangle_79" data-name="Rectangle 79" width="100" height="100" transform="translate(800 700)" fill={pattern[87] ? "#fff" : "#110"} />
        <rect id="Rectangle_89" data-name="Rectangle 89" width="100" height="100" transform="translate(800 800)" fill={pattern[88] ? "#fff" : "#110"} />
        <rect id="Rectangle_99" data-name="Rectangle 99" width="100" height="100" transform="translate(800 900)" fill={pattern[89] ? "#fff" : "#110"} />
        <rect id="Rectangle_10" data-name="Rectangle 10" width="100" height="100" transform="translate(900)" fill={pattern[90] ? "#fff" : "#110"} />
        <rect id="Rectangle_20" data-name="Rectangle 20" width="100" height="100" transform="translate(900 100)" fill={pattern[91] ? "#fff" : "#110"} />
        <rect id="Rectangle_30" data-name="Rectangle 30" width="100" height="100" transform="translate(900 200)" fill={pattern[92] ? "#fff" : "#110"} />
        <rect id="Rectangle_40" data-name="Rectangle 40" width="100" height="100" transform="translate(900 300)" fill={pattern[93] ? "#fff" : "#110"} />
        <rect id="Rectangle_50" data-name="Rectangle 50" width="100" height="100" transform="translate(900 400)" fill={pattern[94] ? "#fff" : "#110"} />
        <rect id="Rectangle_60" data-name="Rectangle 60" width="100" height="100" transform="translate(900 500)" fill={pattern[95] ? "#fff" : "#110"} />
        <rect id="Rectangle_70" data-name="Rectangle 70" width="100" height="100" transform="translate(900 600)" fill={pattern[96] ? "#fff" : "#110"} />
        <rect id="Rectangle_80" data-name="Rectangle 80" width="100" height="100" transform="translate(900 700)" fill={pattern[97] ? "#fff" : "#110"} />
        <rect id="Rectangle_90" data-name="Rectangle 90" width="100" height="100" transform="translate(900 800)" fill={pattern[98] ? "#fff" : "#110"} />
        <rect id="Rectangle_100" data-name="Rectangle 100" width="100" height="100" transform="translate(900 900)" fill={pattern[99] ? "#fff" : "#110"} />
    </svg>
}