var isIE = window.ActiveXObject !== undefined;
var GlobalHebcaWebPDFObject = null;
var fs = null;
//非IE浏览器下
var socket = null;
var host = "ws://localhost:17213/test";
window.onload = function () {
    if (isIE) { // 创建WebSeal对象
        fs = new HebcaWebPDFObject();
    } else {
        connect();
    }
};



function HebcaWebPDFObject() {
    var webPDFCtrl = null;
    // 一个页面只创建一次
    if (null != GlobalHebcaWebPDFObject) {
        return GlobalHebcaWebPDFObject;
    }
    if (isIE) {
        // IE 浏览器创建插件
        try {
            var plugin_embed = document.createElement("OBJECT");
            plugin_embed.setAttribute("id", "wsHebcaWebPDFPlugin");
            plugin_embed.setAttribute("classid", "CLSID:6EE0E832-A96C-480C-AE0A-EB35A9BB9651");
            plugin_embed.setAttribute("width", "1000");
            plugin_embed.setAttribute("height", "480");
            document.body.appendChild(plugin_embed);
            webPDFCtrl = document.getElementById("wsHebcaWebPDFPlugin");
        } catch (e) {
            throw Error("没有安装客户端软件或IE阻止其运行.");
        }
        GlobalHebcaMailClientObj = webPDFCtrl;
    }
    return webPDFCtrl;
}

//连接WebSocket
function connect() {
    try {
        socket = new WebSocket(host);
        socket.onopen = function () {
            socket.send('0|' + new Date().getTime());
        }
        socket.onclose = function () {
            // alert("证书服务无法连接，请启动证书服务。");
        }
    } catch (exception) {
        // alert('Error:' + exception);
    }
}

function Open() {
    if (isIE) {
        try {
            fs.Open();
        } catch (e) {
            alert(e.message);
        }
    } else {
        var msgSend = '1|Open';
        socket.send(msgSend);
        socket.onmessage = function (msg) {
            var args = msg.data.split('|');
            if (args[1] == "Open") {
                var json = eval("(" + args[2] + ")");
                if (json.ret == 0) {
                    //alert("open success");
                } else {
                    //alert("open faild");
                    alert(json.msg);
                }
            }
        }
    }
}

function Close() {
    if (isIE) {
        try {
            fs.Close();
        } catch (e) {
            alert(e.message);
        }
    } else {
        var msgSend = '1|Close';
        socket.send(msgSend);
        socket.onmessage = function (msg) {
            var args = msg.data.split('|');
            if (args[1] == "Close") {
                var json = eval("(" + args[2] + ")");
                if (json.ret == 0) {
                    //alert("close success");
                } else {
                    //alert("close faild");
                    alert(json.msg);
                }
            }
        }
    }
}


function OpenLocalFile2(lpszFile) {
    if (isIE) {
        try {
            fs.OpenLocalFile2(lpszFile);
        } catch (e) {
            alert(e.message);
        }
    } else {
        // 转编码
        var src = lpszFile;
        var dest = base64encode(utf16to8(src));
        lpszFile = dest;

        var msgSend = '1|OpenLocalFile2|{"filepath":"' + lpszFile + '"}';
        socket.send(msgSend);
        socket.onmessage = function (msg) {
            var args = msg.data.split('|');
            if (args[1] == "OpenLocalFile2") {
                var json = eval("(" + args[2] + ")");
                if (json.ret == 0) {
                    //alert("open success");
                } else {
                    alert(json.msg);
                }
            }
        }
    }
}

function CloseFile2() {
    if (isIE) {
        try {
            fs.CloseFile2();
        } catch (e) {
            alert(e.message);
        }
    } else {
        var msgSend = '1|CloseFile2';
        socket.send(msgSend);
        socket.onmessage = function (msg) {
            var args = msg.data.split('|');
            if (args[1] == "CloseFile2") {
                var json = eval("(" + args[2] + ")");
                if (json.ret == 0) {
                    //alert("close PDF success");
                } else {
                    alert(json.msg);
                }
            }
        }
    }
}


function OpenNetFile(lpszFile) {
    if (isIE) {
        try {
            fs.OpenNetFile(lpszFile);
        } catch (e) {
            alert(e.message);
        }
    } else {
        // 转编码
        var src = lpszFile;
        var dest = base64encode(utf16to8(src));
        lpszFile = dest;

        var msgSend = '1|OpenNetFile|{"filepath":"' + lpszFile + '"}';
        socket.send(msgSend);
        socket.onmessage = function (msg) {
            var args = msg.data.split('|');
            if (args[1] == "OpenNetFile") {
                var json = eval("(" + args[2] + ")");
                if (json.ret == 0) {
                    //alert("open success");
                } else {
                    alert(json.msg);
                }
            }
        }
    }
}

function OpenNetFile2(lpszFile) {
    if (isIE) {
        try {
            fs.put_OpenFlags = 12;
            fs.OpenNetFile2(lpszFile);
        } catch (e) {
            alert(e.message);
        }
    } else {
        // 转编码
        var src = lpszFile;
        var dest = base64encode(utf16to8(src));
        lpszFile = dest;

        var msgSend = '1|OpenNetFile2|{"filepath":"' + lpszFile + '"}';
        socket.send(msgSend);
        socket.onmessage = function (msg) {
            var args = msg.data.split('|');
            if (args[1] == "OpenNetFile2") {
                var json = eval("(" + args[2] + ")");
                if (json.ret == 0) {
                    //alert("open success");
                } else {
                    alert(json.msg);
                }
            }
        }
    }
}

// 回调函数原型：function callback(boolean success, string error, string resp)
function SaveNetFile(lpszFile, callback) {
    if (isIE) {
        try {
            var resp = fs.SaveNetFile(lpszFile);
            callback(true, "", resp);
        } catch (e) {
            callback(false, e.message, "");
        }
    } else {
        // 转编码
        var src = lpszFile;
        var dest = base64encode(utf16to8(src));
        lpszFile = dest;

        var msgSend = '1|SaveNetFile|{"filepath":"' + lpszFile + '"}';
        socket.send(msgSend);
        socket.onmessage = function (msg) {
            var args = msg.data.split('|');
            if (args[1] == "SaveNetFile") {
                var json = eval("(" + args[2] + ")");
                callback(json.success, json.error, json.resp);
            } else
                callback(false, "Unknown response " + args[1], "");
        }
    }
}

// 回调函数原型：function callback(boolean success, string error, string stamp, int isSM2)
function SelectStamp(callback) {
    if (isIE) {
        try {
            var stamp = fs.SelectStamp();
            var isSM2 = fs.IsSM2Cert();
            callback(true, "", stamp, isSM2);
        } catch (e) {
            callback(false, e.message, "", false);
        }
    } else {
        var msgSend = '1|SelectStamp';

        socket.send(msgSend);
        socket.onmessage = function (msg) {
            var args = msg.data.split('|');
            if (args[1] == "SelectStamp") {
                var json = eval("(" + args[2] + ")");
                callback(json.success, json.error, json.stamp, json.isSM2);
            } else
                callback(false, "Unknown response " + args[1], "", false);
        }
    }
}

// 回调函数原型：function callback(boolean success, string error, string result)
function SealHash(hashB64, callback) {
    if (isIE) {
        try {
            var result = fs.SealHash(hashB64);
            callback(true, "", result);
        } catch (e) {
            callback(false, e.message, "");
        }
    } else {
        var msgSend = '1|SealHash|{"hash":"' + hashB64 + '"}';

        socket.send(msgSend);
        socket.onmessage = function (msg) {
            var args = msg.data.split('|');
            if (args[1] == "SealHash") {
                var json = eval("(" + args[2] + ")");
                callback(json.success, json.error, json.result);
            } else
                callback(false, "Unknown response " + args[1], "");
        }
    }
}

function ShowExceptionError(e) {
    if (e.name == "TypeError")
        alert("JS错误：" + e.message);
    else {
        try {
            alert("WebPDF错误：" + fs.GetErrMsg());
        } catch (ee) {
            alert("JS内部错误：" + ee.message);
        }
    }
}

function LoadFile(lpszFile) {
    if (isIE) {
        try {
            fs.LoadFile(lpszFile);
        } catch (e) {
            ShowExceptionError(e);
        }
    } else {
        var src = lpszFile;
        var dest = base64encode(utf16to8(src));
        lpszFile = dest;

        var msgSend = '1|LoadFile|{"filepath":"' + lpszFile + '"}';
        socket.send(msgSend);
        socket.onmessage = function (msg) {
            var args = msg.data.split('|');
            if (args[1] == "LoadFile") {
                var json = eval("(" + args[2] + ")");
                if (json.ret == 0) {
                    //alert("LoadFile success");
                } else {
                    alert(json.msg);
                }
            }
        }
    }
}

function GetCurFilePath(callback) {
    if (isIE) {
        try {
            var result = fs.GetCurFilePath();
            callback(true, "", result);
        } catch (e) {
            callback(false, e.message, "");
        }
    } else {
        var msgSend = '1|GetCurFilePath';
        socket.send(msgSend);
        socket.onmessage = function (msg) {
            var args = msg.data.split('|');
            if (args[1] == "GetCurFilePath") {
                var json = eval("(" + args[2] + ")");
                callback(json.success, json.error, json.result);
            }
        }
    }
}

function OpenPage(name, url, cookie, width, height, callback) {
    if (cookie == undefined)
        cookie = "";
    if (width == undefined)
        width = 800;
    if (height == undefined)
        height = 600;

    if (isIE) {
        window.open(url, '', 'width=' + width + ',height=' + height);
        if (callback != undefined)
            callback(true, "", "");
    } else {
        name = base64encode(utf16to8(name));
        var msgSend = '1|OpenPage|{"name":"' + name + '","url":"' + url + '","width":"' + width + '","height":"' + height + '","cookie":"' + cookie + '"}';
        socket.send(msgSend);
        socket.onmessage = function (msg) {
            var args = msg.data.split('|');
            if (args[1] == "OpenPage") {
                var json = eval("(" + args[2] + ")");
                if (callback != undefined)
                    callback(json.success, json.error, json.result);
            }
        }
    }
}

var resultPdfB64Cache="";

function InsertSealBase64PDF_SubPacket_Read(curPacketIndex, subPacketCnt,callback){
    try {
        var msgSend = '1|InsertSealBase64PDF|{"isReceive":"1","subPacketCnt":"' + subPacketCnt + '","curPacketIndex":"' + curPacketIndex + '"}';
        socket.send(msgSend);
        socket.onmessage = function (msg) {
            try {
                var args = msg.data.split('|');
                if (args[1] == "InsertSealBase64PDF") {
                    var json = eval("(" + args[2] + ")");
                    if (json.curPacketIndex < json.subPacketCnt - 1){
                        //继续获取
                        resultPdfB64Cache+=json.result;
                        InsertSealBase64PDF_SubPacket_Read(++curPacketIndex,subPacketCnt,callback);
                    }
                    else{
                        //完成
                        resultPdfB64Cache+=json.result;
                        callback(json.success, json.error, resultPdfB64Cache);
                    }
                } else
                    callback(false, "Unknown response " + args[1], "");
            } catch (e1) {
                callback(false, "[InsertSealBase64PDF_SubPacket_Read->socket.onmessage = function (msg)] throw exception：" + e1.message, "");
            }
        }
    } catch (e) {
        callback(false, e.message, "", 0, 0);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function InsertSealBase64PDF_SubPacket_Do(curPacketIndex, subPacketCnt, lenPerPacketData, pdfB64, pageNo, x, y, sealSN, pwd, eUnitType, callback) {
    try {
        var subPdfB64 = pdfB64.substr(curPacketIndex * lenPerPacketData, lenPerPacketData);
        var msgSend = '1|InsertSealBase64PDF|{"subPacketCnt":"' + subPacketCnt + '","curPacketIndex":"' + curPacketIndex + '","pdfB64":"' + subPdfB64 + '","pageNo":"' + pageNo + '","x":"' + x + '","y":"' + y + '","sealSN":"' + sealSN + '","pwd":"' + pwd + '","eUnitType":"' + eUnitType + '"}';
        socket.send(msgSend);
        socket.onmessage = function (msg) {
            try {
                var args = msg.data.split('|');
                if (args[1] == "InsertSealBase64PDF") {
                    var json = eval("(" + args[2] + ")");
                    if (curPacketIndex>=subPacketCnt-1 && json.curPacketIndex==0){
                        if(json.subPacketCnt!=1){
                            //回传需要分块
                            resultPdfB64Cache=json.result;   //第一块
                            InsertSealBase64PDF_SubPacket_Read(json.curPacketIndex+1,json.subPacketCnt,callback);
                        }else{
                            callback(json.success, json.error, json.result);
                        }
                    }
                    else
                        InsertSealBase64PDF_SubPacket_Do(++curPacketIndex, subPacketCnt, lenPerPacketData, pdfB64, pageNo, x, y, sealSN, pwd, eUnitType, callback);
                } else
                    callback(false, "Unknown response " + args[1], "");
            } catch (e1) {
                callback(false, "[InsertSealBase64PDF_SubPacket_Do->socket.onmessage = function (msg)] throw exception：" + e1.message, "");
            }
        }

    } catch (e) {
        callback(false, e.message, "", 0, 0);
    }
}

// 回调函数原型：function callback(boolean success, string error, string sealPdfB64)
function InsertSealBase64PDF(pdfB64, pageNo, x, y, sealSN, pwd, eUnitType, callback) {
    if (isIE) {
        try {
            var result = fs.InsertSealBase64PDF(pdfB64, pageNo, x, y, sealSN, pwd, eUnitType);
            callback(true, "", result);
        } catch (e) {
            callback(false, e.message, "");
        }
    } else {
        try {
            var lenTotal = pdfB64.length;
            var lenPerPacketData = 10240; //10K
            var subPacketCnt = Math.ceil(lenTotal / lenPerPacketData);
            var curPacketIndex = 0;
            InsertSealBase64PDF_SubPacket_Do(curPacketIndex, subPacketCnt, lenPerPacketData, pdfB64, pageNo, x, y, sealSN, pwd, eUnitType, callback);
        } catch (e) {
            callback(false, e.message, "");
        }
    }
}

function SealKeyWordBase64PDF_SubPacket_Read(curPacketIndex, subPacketCnt,callback){
    try {
        var msgSend = '1|SealKeyWordBase64PDF|{"isReceive":"1","subPacketCnt":"' + subPacketCnt + '","curPacketIndex":"' + curPacketIndex + '"}';
        socket.send(msgSend);
        socket.onmessage = function (msg) {
            try {
                var args = msg.data.split('|');
                if (args[1] == "SealKeyWordBase64PDF") {
                    var json = eval("(" + args[2] + ")");
                    if (json.curPacketIndex < json.subPacketCnt - 1){
                        //继续获取
                        resultPdfB64Cache+=json.result;
                        SealKeyWordBase64PDF_SubPacket_Read(++curPacketIndex,subPacketCnt,callback);
                    }
                    else{
                        //完成
                        resultPdfB64Cache+=json.result;
                        callback(json.success, json.error, resultPdfB64Cache);
                    }
                } else
                    callback(false, "Unknown response " + args[1], "");
            } catch (e1) {
                callback(false, "[SealKeyWordBase64PDF_SubPacket_Read->socket.onmessage = function (msg)] throw exception：" + e1.message, "");
            }
        }
    } catch (e) {
        callback(false, e.message, "", 0, 0);
    }
}

function SealKeyWordBase64PDF_SubPacket_Do(curPacketIndex, subPacketCnt, lenPerPacketData, pdfB64, keyword, sealTSType, offsetX, offsetY, callback) {
    try {
        var subPdfB64 = pdfB64.substr(curPacketIndex * lenPerPacketData, lenPerPacketData);
        var msgSend = '1|SealKeyWordBase64PDF|{"subPacketCnt":"' + subPacketCnt + '","curPacketIndex":"' + curPacketIndex + '","pdfB64":"' + subPdfB64 + '","keyword":"' + keyword + '","sealTSType":"' + sealTSType + '","offsetX":"' + offsetX + '","offsetY":"' + offsetY + '"}';
        socket.send(msgSend);
        socket.onmessage = function (msg) {
            try {
                var args = msg.data.split('|');
                if (args[1] == "SealKeyWordBase64PDF") {
                    var json = eval("(" + args[2] + ")");
					if (curPacketIndex>=subPacketCnt-1 && json.curPacketIndex==0){
                        if(json.subPacketCnt!=1){
                            //回传需要分块
                            resultPdfB64Cache=json.result;   //第一块
                            SealKeyWordBase64PDF_SubPacket_Read(json.curPacketIndex+1,json.subPacketCnt,callback);
                        }else{
                            callback(json.success, json.error, json.result);
                        }
                    }
                    else
                        SealKeyWordBase64PDF_SubPacket_Do(++curPacketIndex, subPacketCnt, lenPerPacketData, pdfB64, keyword, sealTSType, offsetX, offsetY, callback);
                } else
                    callback(false, "Unknown response " + args[1], "");
            } catch (e1) {
                callback(false, "[SealKeyWordBase64PDF_SubPacket_Do->socket.onmessage = function (msg)] throw exception：" + e1.message, "");
            }
        }

    } catch (e) {
        callback(false, e.message, "");
    }
}

// 回调函数原型：function callback(boolean success, string error, string sealPdfB64)
function SealKeyWordBase64PDF(pdfB64, keyword, sealTSType, offsetX, offsetY, callback) {
    if (isIE) {
        try {
            var result = fs.SealKeyWordBase64PDF(pdfB64, keyword, sealTSType, offsetX, offsetY);
            callback(true, "", result);
        } catch (e) {
            callback(false, e.message, "");
        }
    } else {
        try {
            var lenTotal = pdfB64.length;
            var lenPerPacketData = 10240; //10K
            var subPacketCnt = Math.ceil(lenTotal / lenPerPacketData);
            var curPacketIndex = 0;
            var keywordB64 = base64encode(utf16to8(keyword));
            SealKeyWordBase64PDF_SubPacket_Do(curPacketIndex, subPacketCnt, lenPerPacketData, pdfB64, keywordB64, sealTSType, offsetX, offsetY, callback);
        } catch (e) {
            callback(false, e.message, "");
        }
    }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 回调函数原型：function callback(boolean success, string error)
function InsertSeal(pageNo, x, y, sealSN, pwd, callback) {
    if (isIE) {
        try {
            fs.InsertSeal(pageNo, x, y, sealSN, pwd, 0);
            callback(true, "");
        } catch (e) {
            callback(false, e.message, "");
        }
    } else {
        var sealSN64 = base64encode(utf16to8(sealSN));
        var pwd64 = base64encode(utf16to8(pwd));
        var msgSend = '1|InsertSeal|{"pageNo":"' + pageNo + '","x":"' + x + '","y":"' + y + '","sealSN":"' + sealSN64 + '","pwd":"' + pwd64 + '","eUnitType":"0"}';
        socket.send(msgSend);
        socket.onmessage = function (msg) {
            var args = msg.data.split('|');
            if (args[1] == "InsertSeal") {
                var json = eval("(" + args[2] + ")");
                if (json.ret != 0 && json.msg != "用户没有选择签章")
                    callback(false, json.msg);
            } else {
                callback(false, "Unknown response " + args[1]);
            }
        }
    }
}

function SealKeyWord(keyword, callback) {
    if (isIE) {
        try {
            fs.SealKeyWord(keyword, 0, 0, 0);
            callback(true, "");
        } catch (e) {
            callback(false, e.message, "");
        }
    } else {
        var keyword64 = base64encode(utf16to8(keyword));
        var msgSend = '1|SealKeyWord|{"keyword":"' + keyword64 + '","TSType":"0","x":"0","y":"0"}';
        socket.send(msgSend);
        socket.onmessage = function (msg) {
            var args = msg.data.split('|');
            if (args[1] == "SealKeyWord") {
                var json = eval("(" + args[2] + ")");
                if (json.ret != 0)
                    callback(false, json.msg);
            } else {
                callback(false, "Unknown response " + args[1]);
            }
        }
    }
}

function OpenLocalFile(path, callback) {
    if (isIE) {
        try {
            fs.OpenLocalFile(path);
            callback(true, "");
        } catch (e) {
            callback(false, e.message, "");
        }
    } else {
        var path64 = base64encode(utf16to8(path));
        var msgSend = '1|OpenLocalFile|{"filepath":"' + path64 + '"}';
        socket.send(msgSend);
        socket.onmessage = function (msg) {
            var args = msg.data.split('|');
            if (args[1] == "OpenLocalFile") {
                var json = eval("(" + args[2] + ")");
                if (json.ret != 0)
                    callback(false, json.msg);
            } else {
                callback(false, "Unknown response " + args[1]);
            }
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 回调函数原型：function callback(boolean success, string error, int count)
function GetSealCount_Pack(fileURI, callback) {
    var str = fileURI.match(/http:\/\//);
    var isLocal = 0;
    if(str == null) {
        str = fileURI.match(/[a-zA-Z]:\\[a-zA-Z_0-9\\]*/);
        if(str == null){
            callback(false, "文件地址不正确！", 0);
            return;
        }
        else{
            if(fileURI.charAt(1) == ':'){
                isLocal = 1;
            }
            else{
                callback(false, "文件地址不正确！", 0);
                return;
            }
        }
    }

    if (isIE) {
        try {
            var result = fs.GetSealCount_Pack(lpszFile, isLocal);
            callback(true, "", result);
        } catch (e) {
            callback(false, e.message, "");
        }
    } else {
        // 转编码
        var src = fileURI;
        var dest = base64encode(utf16to8(src));
        fileURI = dest;

        var msgSend = '1|GetSealCount_Pack|{"fileURI":"' + fileURI + '","isLocal":"' + isLocal + '"}';
        socket.send(msgSend);
        socket.onmessage = function (msg) {
            var args = msg.data.split('|');
            if (args[1] == "GetSealCount_Pack") {
                var json = eval("(" + args[2] + ")");
                callback(json.ret == 0, json.msg, json.count);
            } else
                callback(false, "Unknown response " + args[1], 0);
        }
    }
}

function GetSealCountInKey(callback){
	if (isIE){
		try{
			var result = fs.GetSealCountInKey();
			callback(true, "", result);
		} catch(e){
			callback(false, e.message, "");
		}
	} else {
		var msgSend = '1|GetSealCountInKey';
		socket.send(msgSend);
		socket.onmessage = function (msg) {
			var args = msg.data.split('|');
			if (args[1] == "GetSealCountInKey" ) {
				 var json = eval("(" + args[2] + ")");
                callback(json.ret == 0, json.msg, json.count);
			} else {
				callback(false, "Unknown response " + args[1], 0);
			}
		}
	}
}
//////////////////////////////////////////////////////////////////////////
// 回调函数原型：function callback(int success, string error, string pic)
function GetSealPicB64(nindex, callback) {
    if (isIE) {
        try {
            var resultB64 =fs.GetSealPicB64(nindex);
            callback(true, "", resultB64);
        } catch (e) {
            if (e.name == "TypeError"){
                callback(false, e.message, "");
            }
            else {
                try {
                    callback(false, fs.GetErrMsg(), "");
                }
                catch (ee) {
                    callback(false, ee.message, "");
                }
            }

        }
    } else {
        var msgSend = '1|GetSealPicB64|{"iIdnex":"' + nindex + '"}';
        socket.send(msgSend);
        socket.onmessage = function (msg) {
            var args = msg.data.split('|');
            if (args[1] == "GetSealPicB64") {
                var json = eval("(" + args[2] + ")");
                callback(json.ret == 0, json.msg, json.pic);
            } else {
                callback(false, "Unknown response " + args[1], "");
            }
        }
    }
}


//////////////////////////////////////////////////////////////////////////
// 回调函数原型：function callback(int success, string error, string errorcode)
function Doc2Pdf(pathsrc, pathdest, callback) {

        var pathsrc64 = base64encode(utf16to8(pathsrc));
        var pathdest64 = base64encode(utf16to8(pathdest));
        var msgSend = '1|Doc2Pdf|{"filepathsrc":"' + pathsrc64+ '","filepathdst":"'+ pathdest64 + '"}';
        socket.send(msgSend);
        socket.onmessage = function (msg) {
            var args = msg.data.split('|');
            if (args[1] == "Doc2Pdf") {
                var json = eval("(" + args[2] + ")");
                callback(json.ret, json.errorcode)
            } else {
                callback(-1, "Unknown response " + args[1]);
            }
        }

}

//////////////////////////////////////////////////////////////////////////
// 转base64相关
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
    -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
    -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];

function base64encode(str) {
    var out, i, len;
    var c1, c2, c3;

    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}

function base64decode(str) {
    var c1, c2, c3, c4;
    var i, len, out;

    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        /* c1 */
        do {
            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c1 == -1);
        if (c1 == -1)
            break;

        /* c2 */
        do {
            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c2 == -1);
        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        /* c3 */
        do {
            c3 = str.charCodeAt(i++) & 0xff;
            if (c3 == 61)
                return out;
            c3 = base64DecodeChars[c3];
        } while (i < len && c3 == -1);
        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        /* c4 */
        do {
            c4 = str.charCodeAt(i++) & 0xff;
            if (c4 == 61)
                return out;
            c4 = base64DecodeChars[c4];
        } while (i < len && c4 == -1);
        if (c4 == -1)
            break;
        out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
}

function utf16to8(str) {
    var out, i, len, c;

    out = "";
    len = str.length;
    for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        } else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        }
    }
    return out;
}

function utf8to16(str) {
    var out, i, len, c;
    var char2, char3;

    out = "";
    len = str.length;
    i = 0;
    while (i < len) {
        c = str.charCodeAt(i++);
        switch (c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                // 0xxxxxxx
                out += str.charAt(i - 1);
                break;
            case 12:
            case 13:
                // 110x xxxx   10xx xxxx
                char2 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                break;
            case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = str.charCodeAt(i++);
                char3 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
                break;
        }
    }

    return out;
}

function CharToHex(str) {
    var out, i, len, c, h;

    out = "";
    len = str.length;
    i = 0;
    while (i < len) {
        c = str.charCodeAt(i++);
        h = c.toString(16);
        if (h.length < 2)
            h = "0" + h;

        out += "\\x" + h + " ";
        if (i > 0 && i % 8 == 0)
            out += "\r\n";
    }

    return out;
}


//////////////////////////////////////////////////////////////////////////
