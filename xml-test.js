/*
Lucid Generated Code
*/
function lucidDebug(uid,event) {
	try{
event.allAttributes_Lucid = "";
 for(var propertyName in event) {event.allAttributes_Lucid += propertyName+",";}		window.LucidWebPreviewDelegate.javascriptFunctionEntered_withEvent_(uid,event);
	} catch(err) { }
}


function lucidLog(uid,value) {
	try{
		console.log(value);
		window.LucidWebPreviewDelegate.lucidLog_withValue_(uid,value);
	} catch(err) { }
}




$(document).ready(function() {


//Lucid_LucidBinding_0_23_11224714810471743701231149425
/*lucidcode*/
$(/*luc!d_element*/document/*luc!d_element_end*/).bind(/*luc!d_event*/'ready'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('11224714810471743701231149425',event);/*luc!d_debug_end*/
	/*luc!d_function*/insertEmptyList(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid

//Lucid_LucidBinding_100_23_4160292882144972431743665628
/*lucidcode*/
$(/*luc!d_element*/'LI.#title1'/*luc!d_element_end*/).bind(/*luc!d_event*/'click'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('4160292882144972431743665628',event);/*luc!d_debug_end*/
	/*luc!d_function*/clearTitle1(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid

//Lucid_LucidBinding_200_23_8356605384036107861733123076
/*lucidcode*/
$(/*luc!d_element*/'LI.#title2'/*luc!d_element_end*/).bind(/*luc!d_event*/'click'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('8356605384036107861733123076',event);/*luc!d_debug_end*/
	/*luc!d_function*/clearTitle2(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid

//Lucid_LucidBinding_300_23_9598698396352278091132576626
/*lucidcode*/
$(/*luc!d_element*/'LI.#title3'/*luc!d_element_end*/).bind(/*luc!d_event*/'click'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('9598698396352278091132576626',event);/*luc!d_debug_end*/
	/*luc!d_function*/clearTitle3(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid

//Lucid_LucidBinding_400_23_19935414624114913401037608040
/*lucidcode*/
$(/*luc!d_element*/'LI.#title4'/*luc!d_element_end*/).bind(/*luc!d_event*/'click'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('19935414624114913401037608040',event);/*luc!d_debug_end*/
	/*luc!d_function*/clearTitle4(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid


});

//Lucid_LucidCustomAction_671_163_3382449134930391821517621748
function customCode(senderObject, event) {
	lucidDebug('3382449134930391821517621748',event);
/*lucidcode*/  /*  $(document).ready(function(){
        $("#dvContent").append("<ul></ul>");
        $.ajax({
            type: "GET",
            url: "BookList.xml",
            dataType: "xml",
            success: function(xml){
                $(xml).find('Book').each(function(){
                var sTitle = $(this).find('Title').text();
                var sPublisher = $(this).find('Publisher').text();
                $("<li></li>").html(sTitle + ", " + sPublisher).appendTo("#dvContent ul");
            });
            },
            error: function() {
            alert("An error occurred while processing XML file.");
            }
        });
    }); *//*lucidcode_end*/

}
//EndLucid

//Lucid_LucidJQueryDOMInsertAction_14_230_15343410036856042451700779560
function insertEmptyList(senderObject, event) {
	lucidDebug('15343410036856042451700779560',event);
/*lucidcode*/
    $(/*luc!d_element*/'DIV.#dvContent'/*luc!d_element_end*/)./*luc!d_functiontype*/append/*luc!d_functiontype_end*/(/*luc!d_code*/"<ul ></ul>"/*luc!d_code_end*/);
/*lucidcode_end*/

/*luc!d_callback*/getBookData(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidAJAXAction_14_329_10661668024618906461990187064
function getBookData(senderObject, event) {
	lucidDebug('10661668024618906461990187064',event);
/*lucidcode*/
    var request = $.ajax({
    url: /*luc!d_url*/'BookList.xml'/*luc!d_url_end*/,
    type: /*luc!d_requesttype*/'GET'/*luc!d_requesttype_end*/,
    data: /*luc!d_data*/null/*luc!d_data_end*/,
    dataType: /*luc!d_datatype*/'xml'/*luc!d_datatype_end*/
    });
    
    request.done(function (msg) {/*luc!d_donecode*/event.msg=msg; /*luc!d_donecode_end*/ 
 /*luc!d_donecallback*/eachBook(senderObject,event);/*luc!d_donecallback_end*/});
    
    request.fail(function (jqXHR, textStatus) {/*luc!d_failcode*/alert("An error occurred while processing XML file.");/*luc!d_failcode_end*/ 
 /*luc!d_failcallback*//*luc!d_failcallback_end*/});
/*lucidcode_end*/


/*luc!d_callback*/eachBook(senderObject,event);/*luc!d_callback_end*/
/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidLoopAction_100_429_8545700533882496351256295859
function eachBook(senderObject, event) {
	lucidDebug('8545700533882496351256295859',event);
/*lucidcode*/
    /*luc!d_setup*/var i = 0;/*luc!d_setup_end*/ 
    while(/*luc!d_condition*/i < $(event.msg).find('Book').length/*luc!d_condition_end*/) {
    /*luc!d_body*/event.currentbook = $(event.msg).find('Book')[i];
getTitle(senderObject, event);
i++;/*luc!d_body_end*/
    }
    /*luc!d_after*//*luc!d_after_end*/
/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidCustomAction_12_505_850118424731648677327951617
function getTitle(senderObject, event) {
	lucidDebug('850118424731648677327951617',event);
/*lucidcode*/event.title = $(event.currentbook).find('Title').text();/*lucidcode_end*/

/*luc!d_callback*/getPublisher(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidJQueryDOMInsertAction_14_725_67362242738343605195875135
function writeList(senderObject, event) {
	lucidDebug('67362242738343605195875135',event);
/*lucidcode*/
    $(/*luc!d_element*/"#dvContent ul"/*luc!d_element_end*/)./*luc!d_functiontype*/append/*luc!d_functiontype_end*/(/*luc!d_code*/$("<li></li>").html(event.title + "&nbsp;  - &nbsp; " +  event.publisher)/*luc!d_code_end*/);
/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidCustomAction_12_615_136802645214606539821325906617
function getPublisher(senderObject, event) {
	lucidDebug('136802645214606539821325906617',event);
/*lucidcode*/event.publisher = $(event.currentbook).find('Publisher').text();/*lucidcode_end*/

/*luc!d_callback*/writeList(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidCustomAction_345_577_6039791472069807907173895196
function getTitle_1(senderObject, event) {
	lucidDebug('6039791472069807907173895196',event);
/*lucidcode*/event.title = $(event.currentbook).find('Title').text();/*lucidcode_end*/

/*luc!d_callback*/writeTitle(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidCustomAction_345_473_6679061496016233741131036742
function getBookAtIndex(senderObject, event) {
	lucidDebug('6679061496016233741131036742',event);
/*lucidcode*/event.currentbook = $(event.msg).find('Book')[event.index];/*lucidcode_end*/

/*luc!d_callback*/getTitle_1(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidAJAXAction_343_351_9697295619913346441183228282
function getBookData_1(senderObject, event) {
	lucidDebug('9697295619913346441183228282',event);
/*lucidcode*/
    var request = $.ajax({
    url: /*luc!d_url*/'BookList.xml'/*luc!d_url_end*/,
    type: /*luc!d_requesttype*/'GET'/*luc!d_requesttype_end*/,
    data: /*luc!d_data*/null/*luc!d_data_end*/,
    dataType: /*luc!d_datatype*/'xml'/*luc!d_datatype_end*/
    });
    
    request.done(function (msg) {/*luc!d_donecode*/event.msg=msg; /*luc!d_donecode_end*/ 
 /*luc!d_donecallback*/getBookAtIndex(senderObject,event);/*luc!d_donecallback_end*/});
    
    request.fail(function (jqXHR, textStatus) {/*luc!d_failcode*/alert("An error occurred while processing XML file.");/*luc!d_failcode_end*/ 
 /*luc!d_failcallback*//*luc!d_failcallback_end*/});
/*lucidcode_end*/


/*luc!d_callback*/getBookAtIndex(senderObject,event);/*luc!d_callback_end*/
/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidGenericAction_183_166_1266634620322665629645017928_MiscJQuery
function clearTitle1(senderObject, event) {
	lucidDebug('1266634620322665629645017928',event);
/*lucidcode*/
$(/*luc!d_bindto*/'DIV.#dvTitleContent'/*luc!d_bindto_end*/)./*luc!d_method*/empty/*luc!d_method_end*/();
/*lucidcode_end*/

/*luc!d_callback*/setTitleIndex1(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidVariableSetter_188_256_45397222020491873961497317633
function setTitleIndex1(senderObject, event) {
	lucidDebug('45397222020491873961497317633',event);
/*lucidcode*/
/*luc!d_name_0*/event.index/*luc!d_name_0_end*/ = /*luc!d_value_0*/0/*luc!d_value_0_end*/;
/*lucidcode*/

/*luc!d_callback*/getBookData_1(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidJQueryDOMInsertAction_345_711_17310385316635993332024389438
function writeTitle(senderObject, event) {
	lucidDebug('17310385316635993332024389438',event);
/*lucidcode*/
    $(/*luc!d_element*/'DIV.#dvTitleContent'/*luc!d_element_end*/)./*luc!d_functiontype*/append/*luc!d_functiontype_end*/(/*luc!d_code*/event.title/*luc!d_code_end*/);
/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidVariableSetter_295_256_44135525544925404760265077
function setTitleIndex2(senderObject, event) {
	lucidDebug('44135525544925404760265077',event);
/*lucidcode*/
/*luc!d_name_0*/event.index/*luc!d_name_0_end*/ = /*luc!d_value_0*/1/*luc!d_value_0_end*/;
/*lucidcode*/

/*luc!d_callback*/getBookData_1(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidVariableSetter_403_258_7413692604930329261412477156
function setTitleIndex3(senderObject, event) {
	lucidDebug('7413692604930329261412477156',event);
/*lucidcode*/
/*luc!d_name_0*/event.index/*luc!d_name_0_end*/ = /*luc!d_value_0*/2/*luc!d_value_0_end*/;
/*lucidcode*/

/*luc!d_callback*/getBookData_1(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidVariableSetter_512_257_84160774315740374592144009667
function setTitleIndex4(senderObject, event) {
	lucidDebug('84160774315740374592144009667',event);
/*lucidcode*/
/*luc!d_name_0*/event.index/*luc!d_name_0_end*/ = /*luc!d_value_0*/3/*luc!d_value_0_end*/;
/*lucidcode*/

/*luc!d_callback*/getBookData_1(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidGenericAction_290_167_866950463159886746714497625_MiscJQuery
function clearTitle2(senderObject, event) {
	lucidDebug('866950463159886746714497625',event);
/*lucidcode*/
$(/*luc!d_bindto*/'DIV.#dvTitleContent'/*luc!d_bindto_end*/)./*luc!d_method*/empty/*luc!d_method_end*/();
/*lucidcode_end*/

/*luc!d_callback*/setTitleIndex2(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidGenericAction_398_167_1179120019491064817546723898_MiscJQuery
function clearTitle3(senderObject, event) {
	lucidDebug('1179120019491064817546723898',event);
/*lucidcode*/
$(/*luc!d_bindto*/'DIV.#dvTitleContent'/*luc!d_bindto_end*/)./*luc!d_method*/empty/*luc!d_method_end*/();
/*lucidcode_end*/

/*luc!d_callback*/setTitleIndex3(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidGenericAction_506_168_14954088701335757249278038205_MiscJQuery
function clearTitle4(senderObject, event) {
	lucidDebug('14954088701335757249278038205',event);
/*lucidcode*/
$(/*luc!d_bindto*/'DIV.#dvTitleContent'/*luc!d_bindto_end*/)./*luc!d_method*/empty/*luc!d_method_end*/();
/*lucidcode_end*/

/*luc!d_callback*/setTitleIndex4(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

