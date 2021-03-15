var searchIndex = JSON.parse('{\
"cfg_if":{"doc":"A macro for defining <code>#[cfg]</code> if-else statements.","i":[[14,"cfg_if","cfg_if","The main macro provided by this crate. See crate …",null,null]],"p":[]},\
"m_captcha":{"doc":"mCaptcha is a proof of work based Denaial-of-Service …","i":[[0,"defense","m_captcha","Defense datatypes",null,null],[3,"Level","m_captcha::defense","Level struct that describes threshold-difficulty factor …",null,null],[12,"visitor_threshold","","",0,null],[12,"difficulty_factor","","",0,null],[3,"LevelBuilder","","Bulder struct for [Level] to describe …",null,null],[11,"visitor_threshold","","set visitor count for level",1,[[]]],[11,"difficulty_factor","","set difficulty factor for level. difficulty_factor can\'t …",1,[[],["captcharesult",6]]],[11,"build","","build Level struct",1,[[],[["captcharesult",6],["level",3]]]],[3,"Defense","","struct describes all the different [Level]s at which an …",null,null],[3,"DefenseBuilder","","Builder struct for [Defense]",null,null],[11,"add_level","","add a level to [Defense]",2,[[["level",3]],["captcharesult",6]]],[11,"build","","Build [Defense]",2,[[],[["defense",3],["captcharesult",6]]]],[11,"get_difficulty","","! Difficulty is calculated as: ! …",3,[[]]],[11,"tighten_up","","tighten up defense. Increases defense level by a factor …",3,[[]]],[11,"loosen_up","","Loosen up defense. Decreases defense level by a factor of …",3,[[]]],[11,"max_defense","","Set defense to maximum level",3,[[]]],[11,"min_defense","","Set defense to minimum level",3,[[]]],[11,"visitor_threshold","","Get current level\'s  visitor threshold",3,[[]]],[0,"errors","m_captcha","Errors and Result module",null,null],[4,"CaptchaError","m_captcha::errors","Error datatype",null,null],[13,"LevelEmpty","","When configuring m_captcha, [DefenseBuilder][…",4,null],[13,"DifficultyFactorZero","","Visitor count must be a whole number(zero and above). …",4,null],[13,"CaptchaDurationZero","","captcha cooldown duration must be greater than 0",4,null],[13,"SetDifficultyFactor","","Difficulty factor must be set",4,null],[13,"SetVisitorThreshold","","Visitor threshold must be set",4,null],[13,"DuplicateVisitorCount","","Visitor count must be Unique",4,null],[13,"DecreaseingDifficultyFactor","","Difficulty factor should increase with level",4,null],[13,"MailboxError","","Difficulty factor should increase with level",4,null],[13,"InsuffiencientDifficulty","","Happens when submitted work doesn\'t satisfy the required …",4,null],[13,"StringNotFound","","Happens when submitted work is computed over string that …",4,null],[13,"PleaseSetValue","","Used in builder structs when a value is not set",4,null],[6,"CaptchaResult","","[Result] datatype for m_captcha",null,null],[0,"master","m_captcha","[Master] actor module that manages [MCaptcha] actors",null,null],[3,"Master","m_captcha::master","This Actor manages the [MCaptcha] actors. A service can …",null,null],[11,"add_site","","add [MCaptcha] actor to [Master]",5,[[["addsite",3]]]],[11,"new","","create new master accepts a <code>u64</code> to configure garbage …",5,[[]]],[11,"get_site","","get [MCaptcha] actor from [Master]",5,[[],[["option",4],["addr",3]]]],[11,"rm_site","","remvoes [MCaptcha] actor from [Master]",5,[[]]],[3,"GetSite","","Message to get an [MCaptcha] actor from master",null,null],[12,"0","","",6,null],[3,"CleanUp","","Message to clean up master of [MCaptcha] actors with zero …",null,null],[3,"RemoveSite","","Message to delete [MCaptcha] actor",null,null],[12,"0","","",7,null],[3,"AddSite","","Message to add an [MCaptcha] actor to [Master]",null,null],[12,"id","","",8,null],[12,"addr","","",8,null],[3,"AddSiteBuilder","","Builder for <code>AddSite</code>.",null,null],[11,"id","","",9,[[["string",3]]]],[11,"addr","","",9,[[["mcaptcha",3],["addr",3]]]],[11,"build","","Builds a new <code>AddSite</code>.",9,[[],[["addsite",3],["string",3],["result",4]]]],[0,"mcaptcha","m_captcha","MCaptcha actor module that manages defense levels",null,null],[3,"MCaptchaBuilder","m_captcha::mcaptcha","Builder for [MCaptcha]",null,null],[3,"MCaptcha","","This struct represents the mCaptcha state and is used to …",null,null],[11,"defense","","set defense",10,[[["defense",3]]]],[11,"duration","","set duration",10,[[]]],[11,"build","","Builds new [MCaptcha]",10,[[],[["captcharesult",6],["mcaptcha",3]]]],[11,"add_visitor","","increments the visitor count by one",11,[[]]],[11,"decrement_visitor","","decrements the visitor count by one",11,[[]]],[11,"get_difficulty","","get current difficulty factor",11,[[]]],[11,"get_duration","","get [MCaptcha]\'s lifetime",11,[[]]],[3,"AddVisitor","","Message to increment the visitor count returns difficulty …",null,null],[3,"AddVisitorResult","","Struct representing the return datatime of [AddVisitor] …",null,null],[12,"duration","","",12,null],[12,"difficulty_factor","","",12,null],[3,"GetCurrentVisitorCount","","Message to get the visitor count",null,null],[3,"Stop","","Message to stop [MCaptcha]",null,null],[0,"cache","m_captcha","message datatypes to interact with [MCaptcha] actor Cache …",null,null],[0,"hashcache","m_captcha::cache","In-memory cache implementation that uses [HashMap]",null,null],[3,"HashCache","m_captcha::cache::hashcache","cache datastructure implementing [Save]",null,null],[0,"messages","m_captcha::cache","Messages that can be sent to cache data structures …",null,null],[3,"Cache","m_captcha::cache::messages","Message to cache PoW difficulty factor and string",null,null],[12,"string","","",13,null],[12,"difficulty_factor","","",13,null],[12,"duration","","",13,null],[3,"CacheBuilder","","Builder for <code>Cache</code>.",null,null],[11,"string","","",14,[[["string",3]]]],[11,"difficulty_factor","","",14,[[]]],[11,"duration","","",14,[[]]],[11,"build","","Builds a new <code>Cache</code>.",14,[[],[["string",3],["result",4],["cache",3]]]],[11,"new","","",13,[[["powconfig",3],["addvisitorresult",3]]]],[3,"Retrive","","Message to retrive the the difficulty factor for the …",null,null],[12,"0","","",15,null],[3,"DeleteString","","Message to delete cached PoW difficulty factor and string …",null,null],[12,"0","","",16,null],[8,"Save","m_captcha::cache","Describes actor handler trait impls that are required by …",null,null],[0,"pow","m_captcha","PoW datatypes used in client-server interaction",null,null],[3,"ConfigBuilder","m_captcha::pow","Builder for <code>Config</code>.",null,null],[3,"PoWConfig","","PoW requirement datatype that is be sent to clients for …",null,null],[12,"string","","",17,null],[12,"difficulty_factor","","",17,null],[11,"new","","create new instance of [PoWConfig]",17,[[]]],[3,"Work","","PoW datatype that clients send to server",null,null],[12,"string","","",18,null],[12,"result","","",18,null],[12,"nonce","","",18,null],[0,"system","m_captcha","module describing mCaptcha system",null,null],[3,"System","m_captcha::system","struct describing various bits of data required for an …",null,null],[12,"master","","",19,null],[3,"SystemBuilder","","Builder for <code>System</code>.",null,null],[11,"master","","",20,[[["addr",3],["master",3]]]],[11,"cache","","",20,[[["addr",3]]]],[11,"pow","","",20,[[["config",3]]]],[11,"build","","Builds a new <code>System</code>.",20,[[],[["system",3],["string",3],["result",4]]]],[11,"get_pow","","utility function to get difficulty factor of site <code>id</code> and …",19,[[["string",3]]]],[11,"verify_pow","","utility function to verify [Work]",19,[[["work",3]]]],[11,"from","m_captcha::defense","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"vzip","","",3,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"from","m_captcha::errors","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"from","m_captcha::master","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"vzip","","",6,[[]]],[11,"from","","",21,[[]]],[11,"into","","",21,[[]]],[11,"borrow","","",21,[[]]],[11,"borrow_mut","","",21,[[]]],[11,"try_from","","",21,[[],["result",4]]],[11,"try_into","","",21,[[],["result",4]]],[11,"type_id","","",21,[[],["typeid",3]]],[11,"vzip","","",21,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"vzip","","",7,[[]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"vzip","","",8,[[]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"vzip","","",9,[[]]],[11,"from","m_captcha::mcaptcha","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"vzip","","",10,[[]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"vzip","","",11,[[]]],[11,"from","","",22,[[]]],[11,"into","","",22,[[]]],[11,"borrow","","",22,[[]]],[11,"borrow_mut","","",22,[[]]],[11,"try_from","","",22,[[],["result",4]]],[11,"try_into","","",22,[[],["result",4]]],[11,"type_id","","",22,[[],["typeid",3]]],[11,"vzip","","",22,[[]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"vzip","","",12,[[]]],[11,"from","","",23,[[]]],[11,"into","","",23,[[]]],[11,"borrow","","",23,[[]]],[11,"borrow_mut","","",23,[[]]],[11,"try_from","","",23,[[],["result",4]]],[11,"try_into","","",23,[[],["result",4]]],[11,"type_id","","",23,[[],["typeid",3]]],[11,"vzip","","",23,[[]]],[11,"from","","",24,[[]]],[11,"into","","",24,[[]]],[11,"borrow","","",24,[[]]],[11,"borrow_mut","","",24,[[]]],[11,"try_from","","",24,[[],["result",4]]],[11,"try_into","","",24,[[],["result",4]]],[11,"type_id","","",24,[[],["typeid",3]]],[11,"vzip","","",24,[[]]],[11,"from","m_captcha::cache::hashcache","",25,[[]]],[11,"into","","",25,[[]]],[11,"to_owned","","",25,[[]]],[11,"clone_into","","",25,[[]]],[11,"borrow","","",25,[[]]],[11,"borrow_mut","","",25,[[]]],[11,"try_from","","",25,[[],["result",4]]],[11,"try_into","","",25,[[],["result",4]]],[11,"type_id","","",25,[[],["typeid",3]]],[11,"vzip","","",25,[[]]],[11,"from","m_captcha::cache::messages","",13,[[]]],[11,"into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"vzip","","",13,[[]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"vzip","","",14,[[]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"vzip","","",15,[[]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"vzip","","",16,[[]]],[11,"from","m_captcha::pow","",26,[[]]],[11,"into","","",26,[[]]],[11,"to_owned","","",26,[[]]],[11,"clone_into","","",26,[[]]],[11,"borrow","","",26,[[]]],[11,"borrow_mut","","",26,[[]]],[11,"try_from","","",26,[[],["result",4]]],[11,"try_into","","",26,[[],["result",4]]],[11,"type_id","","",26,[[],["typeid",3]]],[11,"vzip","","",26,[[]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"to_owned","","",17,[[]]],[11,"clone_into","","",17,[[]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"vzip","","",17,[[]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"to_owned","","",18,[[]]],[11,"clone_into","","",18,[[]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"vzip","","",18,[[]]],[11,"from","m_captcha::system","",19,[[]]],[11,"into","","",19,[[]]],[11,"to_owned","","",19,[[]]],[11,"clone_into","","",19,[[]]],[11,"borrow","","",19,[[]]],[11,"borrow_mut","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"vzip","","",19,[[]]],[11,"from","","",20,[[]]],[11,"into","","",20,[[]]],[11,"to_owned","","",20,[[]]],[11,"clone_into","","",20,[[]]],[11,"borrow","","",20,[[]]],[11,"borrow_mut","","",20,[[]]],[11,"try_from","","",20,[[],["result",4]]],[11,"try_into","","",20,[[],["result",4]]],[11,"type_id","","",20,[[],["typeid",3]]],[11,"vzip","","",20,[[]]],[11,"default","m_captcha::pow","",26,[[],["configbuilder",3]]],[11,"clone","","",26,[[],["configbuilder",3]]],[11,"clone","m_captcha::defense","",0,[[],["level",3]]],[11,"clone","","",1,[[],["levelbuilder",3]]],[11,"clone","","",3,[[],["defense",3]]],[11,"clone","","",2,[[],["defensebuilder",3]]],[11,"clone","m_captcha::errors","",4,[[],["captchaerror",4]]],[11,"clone","m_captcha::master","",5,[[],["master",3]]],[11,"clone","","",9,[[],["addsitebuilder",3]]],[11,"clone","m_captcha::mcaptcha","",10,[[],["mcaptchabuilder",3]]],[11,"clone","","",11,[[],["mcaptcha",3]]],[11,"clone","","",12,[[],["addvisitorresult",3]]],[11,"clone","m_captcha::cache::hashcache","",25,[[],["hashcache",3]]],[11,"clone","m_captcha::cache::messages","",14,[[],["cachebuilder",3]]],[11,"clone","m_captcha::pow","",17,[[],["powconfig",3]]],[11,"clone","","",18,[[],["work",3]]],[11,"clone","m_captcha::system","",19,[[],["system",3]]],[11,"clone","","",20,[[],["systembuilder",3]]],[11,"default","m_captcha::defense","",1,[[]]],[11,"default","","",2,[[]]],[11,"default","m_captcha::master","",9,[[],["addsitebuilder",3]]],[11,"default","m_captcha::mcaptcha","",10,[[]]],[11,"default","m_captcha::cache::hashcache","",25,[[],["hashcache",3]]],[11,"default","m_captcha::cache::messages","",14,[[],["cachebuilder",3]]],[11,"default","m_captcha::system","",20,[[],["systembuilder",3]]],[11,"eq","m_captcha::defense","",0,[[["level",3]]]],[11,"ne","","",0,[[["level",3]]]],[11,"eq","","",1,[[["levelbuilder",3]]]],[11,"ne","","",1,[[["levelbuilder",3]]]],[11,"eq","","",3,[[["defense",3]]]],[11,"ne","","",3,[[["defense",3]]]],[11,"eq","","",2,[[["defensebuilder",3]]]],[11,"ne","","",2,[[["defensebuilder",3]]]],[11,"eq","m_captcha::errors","",4,[[["captchaerror",4]]]],[11,"ne","","",4,[[["captchaerror",4]]]],[11,"fmt","m_captcha::defense","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","m_captcha::errors","",4,[[["formatter",3]],["result",6]]],[11,"fmt","m_captcha::mcaptcha","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","m_captcha::pow","",17,[[["formatter",3]],["result",6]]],[11,"fmt","","",18,[[["formatter",3]],["result",6]]],[11,"fmt","m_captcha::errors","",4,[[["formatter",3]],["result",6]]],[11,"serialize","m_captcha::defense","",0,[[],["result",4]]],[11,"serialize","","",3,[[],["result",4]]],[11,"serialize","m_captcha::mcaptcha","",10,[[],["result",4]]],[11,"serialize","","",11,[[],["result",4]]],[11,"serialize","","",12,[[],["result",4]]],[11,"serialize","m_captcha::cache::messages","",13,[[],["result",4]]],[11,"serialize","m_captcha::pow","",17,[[],["result",4]]],[11,"serialize","","",18,[[],["result",4]]],[11,"deserialize","m_captcha::defense","",0,[[],["result",4]]],[11,"deserialize","","",3,[[],["result",4]]],[11,"deserialize","m_captcha::mcaptcha","",10,[[],["result",4]]],[11,"deserialize","","",11,[[],["result",4]]],[11,"deserialize","","",12,[[],["result",4]]],[11,"deserialize","m_captcha::cache::messages","",13,[[],["result",4]]],[11,"deserialize","m_captcha::pow","",17,[[],["result",4]]],[11,"deserialize","","",18,[[],["result",4]]],[11,"started","m_captcha::master","",5,[[]]],[11,"handle","","",5,[[["getsite",3]]]],[11,"handle","","",5,[[["cleanup",3]]]],[11,"handle","","",5,[[["removesite",3]]]],[11,"handle","","",5,[[["addsite",3]]]],[11,"handle","m_captcha::mcaptcha","",11,[[["addvisitor",3]]]],[11,"handle","","",11,[[["getcurrentvisitorcount",3]]]],[11,"handle","","",11,[[["stop",3]]]],[11,"handle","m_captcha::cache::hashcache","",25,[[["cache",3]]]],[11,"handle","","",25,[[["deletestring",3]]]],[11,"handle","","",25,[[["retrive",3]]]],[11,"salt","m_captcha::pow","",26,[[["string",3]],["configbuilder",3]]],[11,"build","","Builds a new <code>Config</code>.",26,[[],[["string",3],["config",3],["result",4]]]]],"p":[[3,"Level"],[3,"LevelBuilder"],[3,"DefenseBuilder"],[3,"Defense"],[4,"CaptchaError"],[3,"Master"],[3,"GetSite"],[3,"RemoveSite"],[3,"AddSite"],[3,"AddSiteBuilder"],[3,"MCaptchaBuilder"],[3,"MCaptcha"],[3,"AddVisitorResult"],[3,"Cache"],[3,"CacheBuilder"],[3,"Retrive"],[3,"DeleteString"],[3,"PoWConfig"],[3,"Work"],[3,"System"],[3,"SystemBuilder"],[3,"CleanUp"],[3,"AddVisitor"],[3,"GetCurrentVisitorCount"],[3,"Stop"],[3,"HashCache"],[3,"ConfigBuilder"]]},\
"unicode_xid":{"doc":"Determine if a <code>char</code> is a valid identifier for a parser …","i":[[17,"UNICODE_VERSION","unicode_xid","The version of Unicode that this version of unicode-xid …",null,null],[8,"UnicodeXID","","Methods for determining if a character is a valid …",null,null],[10,"is_xid_start","","Returns whether the specified character satisfies the …",0,[[]]],[10,"is_xid_continue","","Returns whether the specified <code>char</code> satisfies the …",0,[[]]]],"p":[[8,"UnicodeXID"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);