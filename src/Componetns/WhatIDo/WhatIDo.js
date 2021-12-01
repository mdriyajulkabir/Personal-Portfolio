
import React from 'react';
import icon from '../../Images/service.67717712.svg'
import webdesign from '../../Images/web-design.f721d630.png'
import webdevelopment from '../../Images/web-development.e943b1aa.png'
import responsive from '../../Images/responsive.png'
import bug from '../../Images/bug.c8ea6b59.png'
import './WhatIDo.css'
const WhatIDo = () => {
    return (
        <div className='my-5 whatido mx-auto'>
            <div className="row d-flex justify-content-between">
                <div className="col-lg-5 col-sm-12">
                    <img className='' src={icon} alt="" />
                </div>
                <div className="col-lg-6 col-sm-12 px-5">
                    <h5>ᴡʜᴀᴛ I ᴅᴏ ?</h5>
                    <h2>Iɴɴᴏᴠᴀᴛɪᴠᴇ Sᴏʟᴜᴛɪᴏɴꜱ Tᴏ Gʀᴏᴡ Yᴏᴜʀ Cʀᴇᴀᴛɪᴠᴇ Pʀᴏᴊᴇᴄᴛꜱ</h2>
                    <div className='mt-4'>
                    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card h-100 rounded shadow">
      <img src={webdesign} class="card-img-top w-25 mx-auto mt-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center">Ｗｅｂ Ｄｅｓｉｇｎ</h5>
        <p class="card-text">Iɴ ᴛᴏᴅᴀʏ’ꜱ ᴅɪɢɪᴛᴀʟ ᴡᴏʀʟᴅ, ʏᴏᴜʀ ᴡᴇʙꜱɪᴛᴇ ɪꜱ ᴛʜᴇ ғɪʀꜱᴛ ɪɴᴛᴇʀᴀᴄᴛɪᴏɴ ᴄᴏɴꜱᴜᴍᴇʀꜱ ʜᴀᴠᴇ ᴡɪᴛʜ ʏᴏᴜʀ ʙᴜꜱɪɴᴇꜱꜱ. </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 shadow rounded">
      <img src={webdevelopment} class="card-img-top mx-auto w-25 mt-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center">Ｗｅｂ Ｄｅｖｅｌｏｐｍｅｎｔ</h5>
        <p class="card-text">Wᴇʙ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ ɪꜱ ᴛʜᴇ ᴡᴏʀᴋ ᴛʜᴀᴛ ʜᴀᴘᴘᴇɴꜱ ʙᴇʜɪɴᴅ ᴛʜᴇ ꜱᴄᴇɴᴇꜱ ᴛᴏ ᴍᴀᴋᴇ ᴀ ᴡᴇʙꜱɪᴛᴇ ʟᴏᴏᴋ ɢʀᴇᴀᴛ.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 shadow rounded">
      <img src={responsive} class="card-img-top w-25 mx-auto mt-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center">Ｒｅｓｐｏｎｓｉｖｅ <br /> Ｄｅｓｉｇｎ</h5>
        <p class="card-text">I ᴄᴀɴ ᴅᴇꜱɪɢɴ ᴀ ᴡᴇʙ ғᴜʟʟʏ ʀᴇꜱᴘᴏɴꜱɪᴠᴇ ᴜꜱɪɴɢ ᴠᴀʀɪᴀɴᴛ ғʀᴀᴍᴇᴡᴏʀᴋ.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 rounded shadow">
      <img src={bug} class="card-img-top mx-auto w-25 mt-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center">Ｂｕｇ Ｆｉｘｉｎｇ</h5>
        <p class="card-text">A ʙᴜɢ ғɪx ɪꜱ ᴀ ᴄʜᴀɴɢᴇ ᴛᴏ ᴀ ꜱʏꜱᴛᴇᴍ ᴏʀ ᴘʀᴏᴅᴜᴄᴛ ᴅᴇꜱɪɢɴᴇᴅ ᴛᴏ ʜᴀɴᴅʟᴇ ᴀ ᴘʀᴏɢʀᴀᴍᴍɪɴɢ ʙᴜɢ/ɢʟɪᴛᴄʜ.</p>
      </div>
    </div>
  </div>
</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;