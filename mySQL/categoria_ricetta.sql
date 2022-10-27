-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Ott 27, 2022 alle 14:44
-- Versione del server: 10.4.24-MariaDB
-- Versione PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smart_cart`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `categoria_ricetta`
--

CREATE TABLE `categoria_ricetta` (
  `id_ricetta` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `categoria_ricetta`
--

INSERT INTO `categoria_ricetta` (`id_ricetta`, `id_categoria`) VALUES
(1, 1),
(2, 1),
(3, 1),
(3, 2),
(4, 1),
(5, 1),
(5, 2),
(6, 1),
(6, 2),
(7, 1),
(7, 2),
(8, 4),
(9, 4),
(10, 4),
(11, 1),
(11, 4),
(12, 1),
(12, 4),
(13, 5),
(14, 1),
(14, 2),
(15, 1),
(15, 2),
(16, 1),
(16, 2),
(16, 3),
(17, 1),
(17, 2),
(18, 1),
(19, 1),
(20, 2),
(20, 3),
(21, 1),
(22, 1),
(22, 2),
(23, 1),
(24, 1),
(25, 1),
(25, 2),
(27, 1),
(27, 2),
(27, 3),
(28, 1),
(28, 4),
(29, 1),
(29, 4),
(30, 1),
(31, 2),
(31, 3),
(32, 1),
(32, 2),
(33, 1),
(33, 2),
(33, 3),
(34, 1),
(35, 1),
(35, 2),
(36, 1);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `categoria_ricetta`
--
ALTER TABLE `categoria_ricetta`
  ADD PRIMARY KEY (`id_ricetta`,`id_categoria`),
  ADD KEY `FKnrp1ai7ie51ell7tuitsj86xr` (`id_categoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
