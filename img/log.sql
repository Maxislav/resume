-- phpMyAdmin SQL Dump
-- version 3.5.8.2
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Апр 11 2014 г., 11:00
-- Версия сервера: 5.1.71
-- Версия PHP: 5.3.3

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
-- Структура таблицы `log`
--

CREATE TABLE IF NOT EXISTS `log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imei` text,
  `lat` text NOT NULL,
  `lng` text NOT NULL,
  `speed` int(11) NOT NULL,
  `datetime` text NOT NULL,
  `zaryad` text NOT NULL,
  `azimuth` int(11) NOT NULL,
  `sputnik` text NOT NULL,
  `tc` text NOT NULL,
  `params` text NOT NULL,
  `sourcedata` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=200351 ;

--
-- Дамп данных таблицы `log`
--

INSERT INTO `log` (`id`, `imei`, `lat`, `lng`, `speed`, `datetime`, `zaryad`, `azimuth`, `sputnik`, `tc`, `params`, `sourcedata`) VALUES
(107070, '2161', '50.443449', '30.514747', 0, '140131205038', 'n/a', 132, 'n/a', '', '', ''),
(117377, '271', '50.433237', '30.441824', 0, '140208013220', 'n/a', 159, 'n/a', '', '', ''),
(146904, 'katran', '50.464699', '30.353982', 2, '140223075435', 'n/a', 314, 'n/a', '', '', ''),
(191438, '202', '50.352698', '30.493145', 0, '140403145230', 'n/a', 0, 'n/a', '', '', ''),
(191831, '221', '50.396669', '30.421272', 24, '140404140338', 'n/a', 127, 'n/a', '', '', ''),
(194554, '35656405190721501', '50.462567', '30.644656', 0, '140406143751', 'n/a', 237, 'n/a', '', '', ''),
(196573, '236', '50.42631', '30.602669', 0, '140409070943', 'n/a', 0, 'n/a', '', '', ''),
(196674, '19871208', '50.453039', '30.491481', 0, '140409074745', 'n/a', 275, 'n/a', '', '', ''),
(199884, '865790010425429', '50.4336', '30.39502', 0, '140411072411', '', 24, '', '', '', ''),
(200251, 'rud', '50.541397', '30.223319', 0, '140411101053', 'n/a', 0, 'n/a', '', '', ''),
(200350, '231', '50.44008', '30.29529', 0, '140411110029', '', 0, '', '', '', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
