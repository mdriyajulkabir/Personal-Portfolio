import React from "react";
import icon from "../../Images/service.67717712.svg";
import webdesign from "../../Images/web-design.f721d630.png";
import webdevelopment from "../../Images/web-development.e943b1aa.png";
import responsive from "../../Images/responsive.png";
import bug from "../../Images/bug.c8ea6b59.png";
import "./WhatIDo.css";
const WhatIDo = () => {
  return (
    <div className="my-5 whatido mx-auto" id="explore">
      <div className="row d-flex justify-content-between">
        <div className="col-lg-5 col-sm-12">
          <img className="" src={icon} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 px-5">
          <h5 className="text-danger">ᴡʜᴀᴛ I ᴅᴏ ?</h5>
          <h2>Iɴɴᴏᴠᴀᴛɪᴠᴇ Sᴏʟᴜᴛɪᴏɴꜱ Tᴏ Gʀᴏᴡ Yᴏᴜʀ Cʀᴇᴀᴛɪᴠᴇ Pʀᴏᴊᴇᴄᴛꜱ</h2>
          <div className="mt-4">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <div className=" h-100 rounded shadow">
                  <img
                    src={webdesign}
                    className="card-img-top w-25 mx-auto d-flex justify-content-center mt-3"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Ｗｅｂ Ｄｅｓｉｇｎ
                    </h5>
                    <p className="card-text">
                      Iɴ ᴛᴏᴅᴀʏ’ꜱ ᴅɪɢɪᴛᴀʟ ᴡᴏʀʟᴅ, ʏᴏᴜʀ ᴡᴇʙꜱɪᴛᴇ ɪꜱ ᴛʜᴇ ғɪʀꜱᴛ
                      ɪɴᴛᴇʀᴀᴄᴛɪᴏɴ ᴄᴏɴꜱᴜᴍᴇʀꜱ ʜᴀᴠᴇ ᴡɪᴛʜ ʏᴏᴜʀ ʙᴜꜱɪɴᴇꜱꜱ.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className=" h-100 shadow rounded">
                  <img
                    src={webdevelopment}
                    className="card-img-top mx-auto d-flex justify-content-center w-25 mt-3"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Ｗｅｂ Ｄｅｖｅｌｏｐｍｅｎｔ
                    </h5>
                    <p className="card-text">
                      Wᴇʙ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ ɪꜱ ᴛʜᴇ ᴡᴏʀᴋ ᴛʜᴀᴛ ʜᴀᴘᴘᴇɴꜱ ʙᴇʜɪɴᴅ ᴛʜᴇ ꜱᴄᴇɴᴇꜱ
                      ᴛᴏ ᴍᴀᴋᴇ ᴀ ᴡᴇʙꜱɪᴛᴇ ʟᴏᴏᴋ ɢʀᴇᴀᴛ.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className=" h-100 shadow rounded">
                  <img
                    src={responsive}
                    className="card-img-top w-25 mx-auto d-flex justify-content-center mt-3"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Ｒｅｓｐｏｎｓｉｖｅ <br /> Ｄｅｓｉｇｎ
                    </h5>
                    <p className="card-text">
                      I ᴄᴀɴ ᴅᴇꜱɪɢɴ ᴀ ᴡᴇʙ ғᴜʟʟʏ ʀᴇꜱᴘᴏɴꜱɪᴠᴇ ᴜꜱɪɴɢ ᴠᴀʀɪᴀɴᴛ
                      ғʀᴀᴍᴇᴡᴏʀᴋ.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className=" h-100 rounded shadow">
                  <img
                    src={bug}
                    className="card-img-top mx-auto d-flex justify-content-center w-25 mt-3"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Ｂｕｇ Ｆｉｘｉｎｇ
                    </h5>
                    <p className="card-text">
                      A ʙᴜɢ ғɪx ɪꜱ ᴀ ᴄʜᴀɴɢᴇ ᴛᴏ ᴀ ꜱʏꜱᴛᴇᴍ ᴏʀ ᴘʀᴏᴅᴜᴄᴛ ᴅᴇꜱɪɢɴᴇᴅ ᴛᴏ
                      ʜᴀɴᴅʟᴇ ᴀ ᴘʀᴏɢʀᴀᴍᴍɪɴɢ ʙᴜɢ/ɢʟɪᴛᴄʜ.
                    </p>
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
