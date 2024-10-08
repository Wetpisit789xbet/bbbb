function generateZodiacFortune() {
    const zodiac = document.getElementById('zodiac-year').value;

    const zodiacFortuneTitle = document.getElementById('zodiac-fortune-title');
    const zodiacFortuneDescription = document.getElementById('zodiac-fortune-description');
    const zodiacFortune = document.getElementById('zodiac-fortune');

    let fortune = {};


    switch (zodiac) {
        case "ชวด":
            fortune = {
                title: "ดวงการเงินของปีชวด",
                description: "ชาวชวดนั้นเกิดภายใต้ดาวเสน่ห์ และความแข็งกร้าว มักเป็นคนชอบแสดงออก และช่างพูดเป็นบางครั้ง ชอบปาร์ตี้ ชอบใช้เวลาพูดคุยกับเพื่อนฝูงเป็นเวลานานๆ แม้คนเกิดปีชวดจะสามารถสงบปากสงบคำได้ แต่เราก็แทบจะไม่เคยเห็นคนเกิดปีนี้นั่งเงียบๆ สักที"
            };
            break;
        case "ฉลู":
            fortune = {
                title: "ดวงความรักของปีฉลู",
                description: "ผู้ที่เกิดปีฉลูเป็นคนขยัน แน่วแน่ และเชื่อมั่นในตัวเอง ด้วยความที่มีมาตรฐานความดีความชั่วแบบขาวกับดำ จึงมักตัดสินผู้อื่นอย่างไร้การประนีประนอมด้วยมาตรฐานเหล่านั้น คนเกิดปีนี้ไม่ชอบเข้าสังคมและมักจะเงียบมากตามงานปาร์ตี้ต่างๆ ภายใต้ลักษณะภายนอกอันสงบนิ่งนั้นซุกซ่อนความช่างคิด และความรุนแรงหากถูกยั่วให้โกรธเอาไว้ เพื่อความปลอดภัยจึงมิควรทำให้คนเกิดปีฉลูโกรธเอ"
            };
            break;
        case "ขาล":
            fortune = {
                title: "ดวงการงานของปีขาล",
                description: "คนเกิดปีขาลนั้นเกิดมาเพื่อเป็นผู้นำอย่างแท้จริง นอกจากนั้นยังมีจิตใจสูงส่ง และกล้าหาญจนได้รับความเคารพแม้กระทั่งจากศัตรูของตนเอง คนเกิดปีขาลคือนักสู้ผู้กล้าหาญที่สามารถต่อสู้ได้จนหยดสุดท้ายเพื่อสิ่งที่ถูกต้อง แม้บางทีจะดูเห็นแก่ตัวไปบ้างในเรื่องเล็ก ๆ น้อย ๆ แต่จริง ๆแล้วชาวปีขาลนั้นใจกว้างไม่เบาคนเกิดปีเสือนั้นมักทำให้ผู้อื่นแปลกใจเสมอ รวมทั้งตื่นตัว และเร่งรีบอยู่ตลอดเวลาด้วย บุคลิกอันน่าเกรงขามแต่ดึงดูดใจในเวลาเดียวกันทำให้ใคร ๆ ก็หลงใหลคนเกิดปีขาล บางทีชาวเสือก็เต็มไปด้วยความขัดแย้งในตัวเอง ไม่ว่าจะโกรธง่ายแต่สงบนิ่งใจดีแต่ขี้กลัว กล้าหาญยามคับขันแต่นุ่มนวล ฯลฯ"
            };
            break;
        case "เถาะ":
            fortune = {
                title: "ดวงสุขภาพของปีเถาะ",
                description: "เนื่องจากผู้เกิดปีเถาะเป็นคนสุขุม จึงเป็นการยากที่จะปลุกอารมณ์กระต่าย ไม่ว่าจะในแง่ใดก็ตาม เพราะกระต่ายไม่ชอบโต้เถียง และรักชีวิตที่เงียบสงบ นอกจากนั้นยังมีอารมณ์อ่อนไหวและขี้สงสาร ถ้าคุณเผลอเล่าปัญหาส่วนตัวให้ฟัง ชาวกระต่ายก็มักจะอินไปกับคุณ และอาจร้องไห้ได้ง่ายๆ ดังนั้นถ้าคุณมีอาชีพเป็นนักขายล่ะก็ อย่าพลาดที่จะแวะเวียนไปทักทายชาวกระต่ายเพราะพวกเขาจะต้องยอมซื้อสินค้าของคุณแน่ๆ(บอกแล้วว่าคนเกิดปีนี้ขี้สงสาร) ไม่ว่าคุณจะเรียกชาวกระต่ายว่าคนขี้ขลาดหรือคนขี้ระแวงก็ตาม เรื่องของเรื่องก็คือชาวกระต่ายมักต้องเปรียบเทียบข้อดีข้อเสียอย่างละเอียดก่อน ตัดสินใจลงมือทำอะไรลงไปทุกครั้ง และนี่ก็คือเคล็ดลับที่ทำให้คนเกิดปีเถาะประสบความสำเร็จในที่ทำงาน"
            };
            break;
        case "มะโรง":
            fortune = {
                title: "ดวงการเงินของปีมะโรง",
                description: "คนเกิดปีมะโรงเป็นคนที่มีความภาคภูมิใจในตัวเอง กระตือรือร้น ทรงอิทธิพล และคล่องแคล่ว นอกจากนั้นยังแข็งกร้าว ยืนหยัดและแน่วแน่ คนเกิดปีมะโรงเป็นคนมีศิลปะในการพูดมักมีความคิดเห็นดีๆ และเป็นที่ปรึกษาที่ยอดเยี่ยมมาก พรสวรรค์บวกกับความใจกว้างทำให้คนเกิดปีนี้มีหน้าที่การงานโดดเด่น อย่างไรก็ตาม คนเกิดปีมะโรงมีนิสัยโกรธง่าย และมีแนวโน้นที่จะภูมิใจในตัวเอง และมั่นใจจนเกินไป จนทำให้กลายเป็นคนหงุดหงิดง่าย ดื้อรั้น เผด็จการและหัวสูง นอกจากนั้นยังหมกมุ่นกับยศถาบรรดาศักดิ์และเงินทองมากเกินไป คนเกิดปีนี้จึงเกลียดที่จะต้องแก่ตัวไปตามวัย"
            };
            break;
        case "มะเส็ง":
            fortune = {
                title: "ดวงความรักของปีมะเส็ง",
                description: "คนเกิดปีมะเส็งเชื่อเรื่องความประทับใจแรก ความ รู้สึก ความเห็นอกเห็นใจ คำแนะนำและความเห็นของผู้อื่น รวมทั้งสัมผัสที่หกในการตัดสินใจเรื่องต่างๆ ถ้าคุณไปยืมเงินคนเกิดปีมะเส็งจะพบว่าคนปีมะเส็งนั้นเขี้ยวน่าดู แม้ว่าท้ายที่สุดจะยอมให้คุณยืมเงินแต่โดยดีก็ตาม ข้อเสียที่สำคัญที่สุดของคนเกิดปีนี้คือการพูดอะไรเกินความจริง ถ้าคนเกิดปีมะเส็งยอมช่วยใครแล้วล่ะก็ หลังจากนั้นเขาหรือเธอจะทำตัวเป็นเจ้าเข้าเจ้าของคนๆ นั้นจนน่าตกใจเลยทีเดียว(บอกแล้วว่างูรัดไม่ปล่อย) ข้อเสียอีกอย่างของคนราศีนี้ก็คือโกหกเก่ง ไม่ว่าจะเรื่องเล็กหรือเรื่องใหญ่ แล้วก็เอาตัวรอดได้ทุกครั้ง"
            };
            break;
        case "มะเมีย":
            fortune = {
                title: "ดวงการงานของปีมะเมีย",
                description: "คนที่ปีมะเมียนั้นเป็นคนที่ตื่นตัวอยู่ตลอดเวลา แต่งตัวดี และเซ็กซี่ชอบเป็นจุดสนใจ มักชอบอยู่ตามงานปาร์ตี้ คอนเสิร์ต และการแข่งขันกีฬาต่างๆ เสมอ ความที่ชอบเดินทาง และรักการแข่งขันทำให้คนเกิดปีมะเมียมักแยกตัวออกมาอยู่คนเดียว ตั้งแต่อายุไม่มาก ความเป็นตัวของตัวเอง และความกบถที่มีอยู่ในตัวทำให้ชาวมะเมีย เกลียดระเบียบแบบแผนจนมักจะมีปัญหาเรื่องการปรับตัวเข้ากับผู้อื่นเสมอ นอกจากนั้นยังเจ้าเล่ห์เพทุบายมากกว่าจะฉลาดหลักแหลม รวมทั้งมีแนวโน้มว่าจะขาดความมั่นใจในตัวเองที่แท้จริงอีกด้วย"
            };
            break;
        case "มะแม":
            fortune = {
                title: "ดวงสุขภาพของปีมะแม",
                description: "ผู้เกิดปีนี้ไม่ค่อยมั่นใจ และปลอดภัยนัก โดยจะต้องการความรักความคุ้มครองตลอดเวลาไม่ชอบเผชิญหน้า ไม่ชอบตัดสินใจเรื่องหนัก ๆ และมักปฏิเสธที่จะอยู่ข้างที่มีแววว่าจะแพ้เอาดื้อ ๆ เมื่อยามมีข้อขัดแย้งกัน คนเกิดปีมะแมเป็นคนช่างฝัน แต่บ่างครั้งก็มองโลกในแง่ร้าย ลังเล กังวล วิตกจริตมากไป คนเกิดปีนี้ค่อนข้างขี้เกียจ ดังนั้น หากสบโอกาสก็พร้อมจะยอมแต่งงานกับคนร่ำรวยเพื่อความสะดวกสบายของตนเอง"
            };
            break;
        case "วอก":
            fortune = {
                title: "ดวงการเงินของปีวอก",
                description: "คนเกิดปีนี้เป็นคนสนุกสนาน ร่าเริง คล่องแคล่ว และน่ารัก นอกจากนั้นยังฉลาดเป็นกรดลองยื่นหนังสือน่าเบื่อให้สักเล่ม แล้วคุณจะเห็นว่า คนปีวอกสามารถทำเรื่องน่าเบื่อให้สนุกได้อย่างน่าประหลาดด้วยความมีทักษะ และความคิดสร้างสรรค์ส่วนตัวอย่าแปลกใจถาคุณพบคนเกิดปีวอกเป็นจุดสนใจของผู้คนในงานปาร์ตี้ความมีเสน่ห์ และอารมณ์ขันคือ ตัวดึงดูดที่สำคัญที่คนเกิดปีนี้มี นอกจากนั้นยังดูเชี่ยวชาญด้านสังคม พูดจาเสนาะหูมีวาทศิลป์ แต่บางทีก็สวมหน้ากากเพื่อพรางความคิดเห็นที่ตนเองมีต่อผู้อื่นได้อย่างแนบเนียน ภายใต้ท่าทางที่แสนเป็นมิตร"
            };
            break;
        case "ระกา":
            fortune = {
                title: "ดวงความรักของปีระกา",
                description: "นเกิดปีระกาแม้จะชอบใช้เงิน แต่ก็ไม่ได้มือเติบเพราะจริงๆ แล้วเป็นคนชอบของลดราคา ชอบเปรียบเทียบราคา และชอบต่อรอง คนเกิดปีนี้เป็นผู้สังเกตการณ์ที่แม่นยำ และมีสัมผัสที่หก ดังนั้นอย่าคิดว่าจะหลอกคนเกิดปีไก่ได้ง่ายๆ เชียวนะ เพราะชาวไก่มีพื้นฐานจิตใจที่ค่อนข้างระมัดระวัง ด้วยพรสวรรค์ในด้านการรับรู้นี้ ทำให้คนเกิดปีระกาแก้ปัญหาได้เก่ง เหมาะกับอาชีพแพทย์ นักสืบ นักจิตวิทยา และพยาบาล"
            };
            break;
        case "จอ":
            fortune = {
                title: "ดวงการงานของปีจอ",
                description: "คนเกิดปีจอนั้นซื่อสัตย์ จริงใจและจงรักภักดี คนเกิดปีนี้มักเป็นคนจริงจัง ขี้บ่น ขี้วิตก แต่ก็เป็นคนมีศักดิ์ศรี และพร้อมจะต่อสู้เพื่อความยุติธรรมเสมอ ถ้าเข้าผิดทาง คุณจะพบว่าคนเกิดปีจอเป็นคนช่างเลือก และระมัดระวังตัว แต่โดยรวมก็เป็นเพื่อนที่น่ารักพอตัว อย่างไรก็ตาม เมื่อใดที่ตกใจกลัวขึ้นมา คนเกิดปีจอก็สามารถผันตัวเป็นคนน่ารังเกียจ และโวยวายไม่หยุดได้เหมือนกัน"
            };
            break;
        case "กุน":
            fortune = {
                title: "ดวงสุขภาพของปีกร",
                description: "คนเกิดปีกุนคือ ต้นแบบแห่งความจริงใจ บริสุทธิ์ ผ่อนปรน และ ศักดิ์ศรีเมื่อแรกพบ คุณจะรู้สึกว่าคนเกิดปีกุนนี้ช่างดีเหลือเกินนอกจากนั้นยังเป็นคนระมัดระวัง ช่างเอาใจใส่ และกล้าหาญ ลองมอบความไว้เนื้อเชื่อใจให้คนเกิดปีกุน แล้วคุณจะรู้ว่าพวกเขาช่างแสนดีพร้อมจะทำทุกสิ่งที่ถูกต้อง และไม่ทำให้คุณผิดหวัง คนเกิดปีกุนมักเป็นที่รักของทุกคน"
            };
            break;
        default:
            fortune = {
                title: "ไม่พบคำทำนาย",
                description: "กรุณาเลือกปีนักษัตรให้ถูกต้อง"
            };
    }

    // แสดงผลคำทำนาย
    zodiacFortuneTitle.textContent = fortune.title;
    zodiacFortuneDescription.textContent = fortune.description;
    zodiacFortune.style.display = "block";
}