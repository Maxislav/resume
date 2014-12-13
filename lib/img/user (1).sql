-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Апр 11 2014 г., 13:53
-- Версия сервера: 5.5.34
-- Версия PHP: 5.3.10-1ubuntu3.9

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `monitoring`
--

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `pass` text NOT NULL,
  `key` text NOT NULL,
  `options` text NOT NULL,
  `device` text NOT NULL,
  `tracks` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=29 ;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `name`, `pass`, `key`, `options`, `device`, `tracks`) VALUES
(1, 'MH', '8883', '14f8bf6bcd1e11f7799fecdf89275a97', '{"map":"ggl","startCentre":{"lat":"50.434","lng":"30.533"},"gmt":"2","startZoom":"12","event":"true","dtpnews":"true"}', '[{"imei":"271","phone":"(068)126-9199","name":"andrey.sava"},{"imei":"865790010425429","phone":"(098)556-6570","name":"Maxislav"},{"imei":"231","phone":"(097)723-7678","name":"sai"},{"imei":"19871208","phone":"(050)384-4881","name":"amid.kosh"},{"imei":"236","phone":"(067)379-2005","name":"nkvd"},{"imei":"rud","phone":"(063)932-2802","name":"Rud"},{"imei":"221","phone":"(093)752-1548","name":"mr.lucky"},{"imei":"223","phone":"(067)232-1485","name":"burik"},{"imei":"2161","phone":"(066)025-4828","name":"trin"},{"imei":"katran","phone":"(096)8272881","name":"katran"}]', ''),
(3, 'andrey.sava', '271', '0524bbc7d57d3edbd146cb19bbd4d1f2', '{"map":"osm","startCentre":{"lat":"50.44","lng":"30.52"},"gmt":"2","startZoom":"12","event":"false","dtpnews":"true"}', '[{"imei":"271","phone":"(068)126-9199","name":"andrey.sava"},{"imei":"865790010425429","phone":"(098)556-6570","name":"Maxislav"},{"imei":"231","phone":"(097)723-7678","name":"sai"},{"imei":"19871208","phone":"(050)384-4881","name":"amid.kosh"},{"imei":"236","phone":"(067)379-2005","name":"nkvd"},{"imei":"rud","phone":"(063)932-2802","name":"Rud"},{"imei":"221","phone":"(093)752-1548","name":"mr.lucky"},{"imei":"223","phone":"(067)232-1485","name":"burik"},{"imei":"2161","phone":"(066)025-4828","name":"trin"},{"imei":"katran","phone":"(096)8272881","name":"katran"}]', ''),
(4, 'admin!', '1111', '9a952cd91000872a8d7d1f5ee0c87317', '{"map":"ggl","startCentre":{"lat":"50.444","lng":"30.520"},"gmt":"3","startZoom":"11","event":"true","dtpnews":"true","filter":"false","group":"mh","zone":"true"}', '[{"imei":"271","phone":"(068)126-9199","name":"andrey.sava"},{"imei":"865790010425429","phone":"(098)556-6570","name":"Maxislav"},{"imei":"231","phone":"(097)723-7678","name":"sai"},{"imei":"19871208","phone":"(050)384-4881","name":"amid.kosh"},{"imei":"236","phone":"(067)379-2005","name":"nkvd"},{"imei":"rud","phone":"(063)932-2802","name":"Rud"},{"imei":"221","phone":"(093)752-1548","name":"mr.lucky"},{"imei":"223","phone":"(067)232-1485","name":"burik"},{"imei":"2161","phone":"(066)025-4828","name":"trin"},{"imei":"katran","phone":"(096)8272881","name":"katran"},{"imei":"35656405190721501","phone":"","name":"andrey"}]', ''),
(5, 'amid.kosh', '1111', '8be1e5baf37a2383302165e0258dfc4d', '{"map":"yan","startCentre":{"lat":"50.44","lng":"30.52"},"gmt":"2","startZoom":"11","event":"false","dtpnews":"true","filter":"true"}', '[{"imei":"271","phone":"(068)126-9199","name":"andrey.sava"},{"imei":"865790010425429","phone":"(098)556-6570","name":"Maxislav"},{"imei":"231","phone":"(097)723-7678","name":"sai"},{"imei":"19871208","phone":"(050)384-4881","name":"amid.kosh"}]', ''),
(6, 'sai', '123456', '802073163108528ae946480d23f3e2cf', '{"map":"ggl","startCentre":{"lat":"50.434","lng":"30.533"},"gmt":"3","startZoom":"12","event":"true","dtpnews":"true","filter":"true","group":"mh","zone":"true"}', '[{"imei":"271","phone":"(068)126-9199","name":"andrey.sava"},{"imei":"865790010425429","phone":"(098)556-6570","name":"Maxislav"},{"imei":"231","phone":"(097)723-7678","name":"sai"},{"imei":"19871208","phone":"(050)384-4881","name":"amid.kosh"},{"imei":"236","phone":"(067)379-2005","name":"nkvd"},{"imei":"rud","phone":"(063)932-2802","name":"Rud"},{"imei":"221","phone":"(093)752-1548","name":"mr.lucky"},{"imei":"223","phone":"(067)232-1485","name":"burik"},{"imei":"2161","phone":"(066)025-4828","name":"trin"},{"imei":"katran","phone":"(096)8272881","name":"katran"},{"imei":"202","phone":"(063)3514268","name":"den4ik"}]', ''),
(7, 'artpotvora', '123456', 'b95a0a3ece23cf05504f534b393cc3dd', '{"map":"osm","startCentre":{"lat":"50.434","lng":"30.533"},"gmt":"2","startZoom":"12","event":"true","dtpnews":"true"}', '[{"imei":"271","phone":"(068)126-9199","name":"andrey.sava"},{"imei":"865790010425429","phone":"(098)556-6570","name":"Maxislav"},{"imei":"231","phone":"(097)723-7678","name":"sai"},{"imei":"19871208","phone":"(050)384-4881","name":"amid.kosh"},{"imei":"236","phone":"(067)379-2005","name":"nkvd"},{"imei":"rud","phone":"(063)932-2802","name":"Rud"},{"imei":"221","phone":"(093)752-1548","name":"mr.lucky"},{"imei":"223","phone":"(067)232-1485","name":"burik"},{"imei":"2161","phone":"(066)025-4828","name":"trin"},{"imei":"katran","phone":"(096)8272881","name":"katran"}]', ''),
(8, 'nkvd', '123456', '4eef3be2f1aa6240ada14d0df9720d05', '{"map":"osm","startCentre":{"lat":"50.434","lng":"30.533"},"gmt":"2","startZoom":"12","event":"true","dtpnews":"true"}', '[{"imei":"271","phone":"(068)126-9199","name":"andrey.sava"},{"imei":"865790010425429","phone":"(098)556-6570","name":"Maxislav"},{"imei":"231","phone":"(097)723-7678","name":"sai"},{"imei":"19871208","phone":"(050)384-4881","name":"amid.kosh"},{"imei":"236","phone":"(067)379-2005","name":"nkvd"},{"imei":"rud","phone":"(063)932-2802","name":"Rud"},{"imei":"221","phone":"(093)752-1548","name":"mr.lucky"},{"imei":"223","phone":"(067)232-1485","name":"burik"},{"imei":"2161","phone":"(066)025-4828","name":"trin"},{"imei":"katran","phone":"(096)8272881","name":"katran"}]', ''),
(9, 'demo', 'demo', 'b6707ee770ea16c1c74318d6f5ebbf8a', '{"map":"ggl","startCentre":{"lat":"50.434","lng":"30.584"},"gmt":"2","startZoom":"10","event":"false","dtpnews":"false","filter":"false"}', '[{"imei":"865790010425429","phone":"(098)556-6570","name":"Maxislav"},{"imei":"865790010425430","phone":"(098)556-6571","name":"test"}]', ''),
(11, 'erdts', '1234', '8b2bce38439e607a1a75f6fc439a4655', '{"map":"osm","startCentre":{"lat":"50.44","lng":"30.52"},"gmt":"2","startZoom":"12","event":"false","dtpnews":"false"}', '[{"imei":"211321354654","phone":"","name":"hbhj"}]', ''),
(12, 'katran', '1234', '00c66aaf5f2c3f49946f15c1ad2ea0d3', '{"map":"ggl","startCentre":{"lat":"50.434","lng":"30.533"},"gmt":"2","startZoom":"12","event":"true","dtpnews":"true"}', '[{"imei":"271","phone":"(068)126-9199","name":"andrey.sava"},{"imei":"865790010425429","phone":"(098)556-6570","name":"Maxislav"},{"imei":"231","phone":"(097)723-7678","name":"sai"},{"imei":"19871208","phone":"(050)384-4881","name":"amid.kosh"},{"imei":"236","phone":"(067)379-2005","name":"nkvd"},{"imei":"rud","phone":"(063)932-2802","name":"Rud"},{"imei":"221","phone":"(093)752-1548","name":"mr.lucky"},{"imei":"223","phone":"(067)232-1485","name":"burik"},{"imei":"2161","phone":"(066)025-4828","name":"trin"},{"imei":"katran","phone":"(096)8272881","name":"katran"}]', ''),
(19, 'oleg', 'oleg', 'ebbb292f03151945497564678ab69672', '{"map":"osm","startCentre":{"lat":"50.457","lng":"30.533"},"gmt":"8","startZoom":"12","event":"false","dtpnews":"false"}', '[{"imei":"024344567898","phone":" 7123456789","name":"oleg"}]', ''),
(20, 'yulenka', '123456', '4e82d1345281a7236cb1cc1035062136', '{"map":"ggl","startCentre":{"lat":"50.434","lng":"30.533"},"gmt":"2","startZoom":"12","event":"true","dtpnews":"true"}', '[{"imei":"271","phone":"(068)126-9199","name":"andrey.sava"},{"imei":"865790010425429","phone":"(098)556-6570","name":"Maxislav"},{"imei":"231","phone":"(097)723-7678","name":"sai"},{"imei":"19871208","phone":"(050)384-4881","name":"amid.kosh"},{"imei":"236","phone":"(067)379-2005","name":"nkvd"},{"imei":"rud","phone":"(063)932-2802","name":"Rud"},{"imei":"221","phone":"(093)752-1548","name":"mr.lucky"},{"imei":"223","phone":"(067)232-1485","name":"burik"},{"imei":"2161","phone":"(066)025-4828","name":"trin"},{"imei":"katran","phone":"(096)8272881","name":"katran"}]', ''),
(27, 'Alekceich', '199909', '889515557976b95bc605997a2212f955', '{"map":"osm","startCentre":{"lat":"50.44","lng":"30.52"},"gmt":"2","startZoom":"12","event":"false","dtpnews":"false","filter":"true"}', '[{"imei":"35656405190721501","phone":"","name":"MAO"}]', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
