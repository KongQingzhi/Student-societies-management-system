/*
Navicat MySQL Data Transfer

Source Server         : kong
Source Server Version : 50151
Source Host           : localhost:3306
Source Database       : societies

Target Server Type    : MYSQL
Target Server Version : 50151
File Encoding         : 65001

Date: 2022-10-08 17:21:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_activity
-- ----------------------------
DROP TABLE IF EXISTS `t_activity`;
CREATE TABLE `t_activity` (
  `AC_id` int(11) NOT NULL AUTO_INCREMENT,
  `AC_theme` varchar(30) NOT NULL,
  `AC_organize` varchar(30) NOT NULL,
  `AC_undertaker` varchar(30) NOT NULL,
  `AC_people` varchar(30) NOT NULL,
  `AC_tel` varchar(11) NOT NULL,
  `AC_time` varchar(30) NOT NULL,
  `AC_location` varchar(10) NOT NULL,
  `AC_money` float NOT NULL,
  `AC_remark` varchar(50) DEFAULT NULL,
  `AC_state` int(11) DEFAULT NULL,
  PRIMARY KEY (`AC_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_activity
-- ----------------------------
INSERT INTO `t_activity` VALUES ('3', '毕业晚会', '桂林理工大学', '测绘学院', '王五', '18567384493', '2018-5-6', '体育训练馆', '540', '经费过高', '0');
INSERT INTO `t_activity` VALUES ('4', '理学院暑期“三下乡”社会实践', '桂林理工大学', '理学院', '张三', '18877384493', '2016-7-6', '校外', '675', '已通过', '1');
INSERT INTO `t_activity` VALUES ('5', '义务维修', '理学院', '理学院物理协会', '李丽', '18745657653', '2017-11-6', '一号食堂', '54', '已通过', '1');
INSERT INTO `t_activity` VALUES ('6', '辩论赛', '桂林理工大学', '信息学院', '罗莎', '18877384773', '2018-4-20', '06102', '98', '主题不明确', '0');
INSERT INTO `t_activity` VALUES ('7', '桂工杯篮球联赛', '桂林理工大学', '环境学院', '黄龙', '18345778654', '2015-5-6', '二号篮球场', '456', '已通过', '1');
INSERT INTO `t_activity` VALUES ('8', '英文朗诵比赛', '桂林理工大学', '英语协会', '梁红', '15571384493', '2018-5-21', '05102', '143', '已通过', '1');
INSERT INTO `t_activity` VALUES ('9', '桂工杯足球联赛', '桂林理工大学', '理学院', '张三', '18877384493', '2018-5-23', '足球场', '100', '已通过', '1');
INSERT INTO `t_activity` VALUES ('12', '围棋大赛', '棋社', '棋社', '龚倩', '15457384493', '2022-09-29T13:35', '棋社', '1200', '已通过', '1');
INSERT INTO `t_activity` VALUES ('13', '3122', 'SDV', 'SDSV', '张三', '15653754746', '2022-10-20T15:38', 'SDDV', '1000', '已通过', '1');

-- ----------------------------
-- Table structure for t_am
-- ----------------------------
DROP TABLE IF EXISTS `t_am`;
CREATE TABLE `t_am` (
  `AC_id` int(11) DEFAULT NULL,
  `num` char(11) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `AC_id` (`AC_id`),
  KEY `num` (`num`),
  CONSTRAINT `t_am_ibfk_1` FOREIGN KEY (`AC_id`) REFERENCES `t_activity` (`AC_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `t_am_ibfk_2` FOREIGN KEY (`num`) REFERENCES `t_merber` (`num`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_am
-- ----------------------------
INSERT INTO `t_am` VALUES ('5', '2223234545', '1');
INSERT INTO `t_am` VALUES ('4', '2223234545', '2');
INSERT INTO `t_am` VALUES ('4', '1232123345', '17');

-- ----------------------------
-- Table structure for t_cm
-- ----------------------------
DROP TABLE IF EXISTS `t_cm`;
CREATE TABLE `t_cm` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `C_id` int(11) NOT NULL,
  `num` char(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `C_id` (`C_id`),
  KEY `num` (`num`),
  CONSTRAINT `t_cm_ibfk_1` FOREIGN KEY (`C_id`) REFERENCES `t_community` (`C_id`),
  CONSTRAINT `t_cm_ibfk_2` FOREIGN KEY (`num`) REFERENCES `t_merber` (`num`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cm
-- ----------------------------
INSERT INTO `t_cm` VALUES ('6', '48', '1232123345');
INSERT INTO `t_cm` VALUES ('10', '4', '2343454454');
INSERT INTO `t_cm` VALUES ('11', '5', '3141342234');
INSERT INTO `t_cm` VALUES ('12', '7', '5545454544');
INSERT INTO `t_cm` VALUES ('13', '8', '5454345566');
INSERT INTO `t_cm` VALUES ('14', '9', '6564454356');
INSERT INTO `t_cm` VALUES ('15', '10', '2343454454');
INSERT INTO `t_cm` VALUES ('16', '11', '3141342234');
INSERT INTO `t_cm` VALUES ('17', '12', '3456543345');
INSERT INTO `t_cm` VALUES ('18', '13', '4535655544');
INSERT INTO `t_cm` VALUES ('19', '14', '5454345566');
INSERT INTO `t_cm` VALUES ('20', '15', '3141234456');
INSERT INTO `t_cm` VALUES ('21', '16', '6564454356');
INSERT INTO `t_cm` VALUES ('23', '48', '1726736672');

-- ----------------------------
-- Table structure for t_community
-- ----------------------------
DROP TABLE IF EXISTS `t_community`;
CREATE TABLE `t_community` (
  `C_id` int(11) NOT NULL AUTO_INCREMENT,
  `R_id` int(11) DEFAULT NULL,
  `C_name` char(30) NOT NULL,
  `C_people` char(30) NOT NULL,
  `C_class` char(20) NOT NULL,
  `C_tel` char(11) NOT NULL,
  `C_qq` char(20) NOT NULL,
  `C_introduce` char(200) DEFAULT NULL,
  PRIMARY KEY (`C_id`),
  KEY `FK_Relationship_2` (`R_id`),
  CONSTRAINT `FK_Relationship_2` FOREIGN KEY (`R_id`) REFERENCES `t_role` (`R_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_community
-- ----------------------------
INSERT INTO `t_community` VALUES ('3', '2', '测绘团委学生会', '王五', '地信14-2班', '18567384493', '234321457', '学生会，为同学！');
INSERT INTO `t_community` VALUES ('4', '2', '地科学院团委学生会', '冯磊', '宝石14-2班', '18127384493', '4643567554', '学生会，为同学！');
INSERT INTO `t_community` VALUES ('5', '2', '信息学院团委学生会', '罗莎', '物联网14-2班', '18877384773', '453267876', '学生会，为同学！');
INSERT INTO `t_community` VALUES ('7', '2', '理学院团委学生会', '陈薇', '信科14-2班', '18777384493', '345432423', '学生会，为同学！');
INSERT INTO `t_community` VALUES ('8', '2', '外国语学院团委学生会', '姜蓉', '英语14-2班', '15077384493', '789878987', '学生会，为同学！');
INSERT INTO `t_community` VALUES ('9', '2', '旅游学院团委学生会', '李明伟', '风景园林14-2班', '15577384493', '565345434', '学生会，为同学！');
INSERT INTO `t_community` VALUES ('10', '2', '环境学院团委学生会', '王世超', '给排水14-2班', '18277384493', '5656545654', '学生会，为同学！');
INSERT INTO `t_community` VALUES ('11', '2', '人文学院团委学生会', '罗丹', '历史14-2班', '15577384493', '345654565', '学生会，为同学！');
INSERT INTO `t_community` VALUES ('12', '2', '英语协会', '梁红', '英语14-2班', '15571384493', '456545654', '开拓，兼容！');
INSERT INTO `t_community` VALUES ('13', '2', '书法协会', '承德', '英语14-2班', '15571384493', '456545654', '你好，书法！');
INSERT INTO `t_community` VALUES ('14', '2', '自行车协会', '神威', '英语14-2班', '15571384493', '456545654', '健康，向上！');
INSERT INTO `t_community` VALUES ('15', '2', '剪纸协会', '维度', '英语14-2班', '15571384493', '456545654', '传承工艺，发扬文化');
INSERT INTO `t_community` VALUES ('16', '2', '轮滑协会', '苏少', '英语14-2班', '15571384493', '456545654', '敢拼，敢闯！');
INSERT INTO `t_community` VALUES ('48', '2', '吉他社', '张鹏', '物理班', '15655243335', '1425367852', '为爱发绳');

-- ----------------------------
-- Table structure for t_manager
-- ----------------------------
DROP TABLE IF EXISTS `t_manager`;
CREATE TABLE `t_manager` (
  `R_id` int(11) DEFAULT NULL,
  `C_id` int(11) DEFAULT NULL,
  `num` varchar(30) NOT NULL,
  `pwd` varchar(20) NOT NULL,
  `name` varchar(30) NOT NULL,
  `sex` char(2) DEFAULT NULL,
  `class` varchar(30) NOT NULL,
  `position` varchar(30) NOT NULL,
  `tel` varchar(11) NOT NULL,
  PRIMARY KEY (`num`),
  KEY `FK_Relationship_9` (`C_id`),
  KEY `FK_Relationship_6` (`R_id`),
  CONSTRAINT `FK_Relationship_6` FOREIGN KEY (`R_id`) REFERENCES `t_role` (`R_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_Relationship_9` FOREIGN KEY (`C_id`) REFERENCES `t_community` (`C_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_manager
-- ----------------------------
INSERT INTO `t_manager` VALUES ('3', '5', '3142369987', 'ff34f34f', '罗莎', '女', '土木14-2班', '学生会副会长', '15677384493');
INSERT INTO `t_manager` VALUES ('3', '9', '3143246676', '123456', '梁丹', '女', '信科14-1班', '学生会副会长', '18877876653');

-- ----------------------------
-- Table structure for t_merber
-- ----------------------------
DROP TABLE IF EXISTS `t_merber`;
CREATE TABLE `t_merber` (
  `num` varchar(20) NOT NULL,
  `pwd` varchar(20) NOT NULL,
  `name` varchar(30) NOT NULL,
  `tel` varchar(11) DEFAULT NULL,
  `R_id` int(11) DEFAULT NULL,
  `C_id` int(11) DEFAULT NULL,
  `clazz` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`num`),
  KEY `FK_Relationship_7` (`C_id`),
  KEY `FK_Relationship_1` (`R_id`),
  CONSTRAINT `FK_Relationship_1` FOREIGN KEY (`R_id`) REFERENCES `t_role` (`R_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_Relationship_7` FOREIGN KEY (`C_id`) REFERENCES `t_community` (`C_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_merber
-- ----------------------------
INSERT INTO `t_merber` VALUES ('1145778667', 'g56y45r34', '伟峰', '18877364637', '1', '16', '电子');
INSERT INTO `t_merber` VALUES ('1232123345', '123456', '季金鸥', '17878565663', '1', '16', '电子');
INSERT INTO `t_merber` VALUES ('1428390162', '123', '张三', '15653754746', '1', null, 'jiin');
INSERT INTO `t_merber` VALUES ('1726736672', '123456', '龚倩', '15457384493', '2', '48', '电子');
INSERT INTO `t_merber` VALUES ('2223234545', 'fferv34', '王鹏鹏', '15876384493', '1', '16', '电子');
INSERT INTO `t_merber` VALUES ('2323432454', 'gewg45t', '杨雪', '18857384473', '1', '16', '光电');
INSERT INTO `t_merber` VALUES ('2343454454', 'wer32rewf', '胡仨', '18796565666', '1', '14', '光电');
INSERT INTO `t_merber` VALUES ('2387546765', 'g34t34s', '阳阳', '18877764463', '1', '3', '光电');
INSERT INTO `t_merber` VALUES ('3141234456', 'cewfewf', '蒋明明', '18756920654', '1', '15', '光电');
INSERT INTO `t_merber` VALUES ('3141342234', 'scdsacwe', '苟富贵', '19895956563', '1', '15', '电子');
INSERT INTO `t_merber` VALUES ('3434321345', 'g54tergw', '苏亮亮', '15457386693', '1', '14', '电子');
INSERT INTO `t_merber` VALUES ('3456543345', 'g45t34terg', '黄雪梅', '15457382293', '1', '13', '电子');
INSERT INTO `t_merber` VALUES ('4345645677', 'g35t43tg', '庞唯', '15956384493', '1', '12', '电子');
INSERT INTO `t_merber` VALUES ('4535655544', 'g45gr5', '凤珍', '15959984493', '1', '13', '电子');
INSERT INTO `t_merber` VALUES ('5454345566', 'g4g34tfgerg', '王晓武', '15457383393', '1', '16', '光电');
INSERT INTO `t_merber` VALUES ('5545454544', 'g3tgferg', '梁溪区', '15457384393', '1', '12', '光电');
INSERT INTO `t_merber` VALUES ('5545545545', '123456', '龙华', '18975421003', '1', '12', '光电');
INSERT INTO `t_merber` VALUES ('6564454356', 'f34f35t54', '梁萌', '1547384493', '1', '13', '光电');

-- ----------------------------
-- Table structure for t_privilege
-- ----------------------------
DROP TABLE IF EXISTS `t_privilege`;
CREATE TABLE `t_privilege` (
  `Pri_id` int(11) NOT NULL AUTO_INCREMENT,
  `Pri_name` varchar(30) NOT NULL,
  PRIMARY KEY (`Pri_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_privilege
-- ----------------------------
INSERT INTO `t_privilege` VALUES ('1', '会员权限');
INSERT INTO `t_privilege` VALUES ('2', '社团管理员权限');
INSERT INTO `t_privilege` VALUES ('3', '系统管理员权限');
INSERT INTO `t_privilege` VALUES ('8', '普通用户');

-- ----------------------------
-- Table structure for t_role
-- ----------------------------
DROP TABLE IF EXISTS `t_role`;
CREATE TABLE `t_role` (
  `R_id` int(11) NOT NULL AUTO_INCREMENT,
  `Pri_id` int(11) DEFAULT NULL,
  `R_name` varchar(30) NOT NULL,
  PRIMARY KEY (`R_id`),
  KEY `FK_Relationship_3` (`Pri_id`),
  CONSTRAINT `FK_Relationship_3` FOREIGN KEY (`Pri_id`) REFERENCES `t_privilege` (`Pri_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_role
-- ----------------------------
INSERT INTO `t_role` VALUES ('1', '1', 'member');
INSERT INTO `t_role` VALUES ('2', '2', 'community');
INSERT INTO `t_role` VALUES ('3', '3', 'manager');
