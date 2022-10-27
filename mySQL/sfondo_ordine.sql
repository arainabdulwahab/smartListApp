-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Ott 27, 2022 alle 14:43
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
-- Struttura della tabella `sfondo_ordine`
--

CREATE TABLE `sfondo_ordine` (
  `id_sfondo_ordine` int(11) NOT NULL,
  `colore` varchar(255) DEFAULT NULL,
  `sfondo` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `sfondo_ordine`
--

INSERT INTO `sfondo_ordine` (`id_sfondo_ordine`, `colore`, `sfondo`) VALUES
(1, '#D88D8C\r', ''),
(2, '', 'img/wallpaper/wallpaper_liste/wallpaper-list-1.webp\n'),
(3, '#96D9B8', 'img/wallpaper/wallpaper_liste/wallpaper-list-2.webp\n'),
(4, '', 'img/wallpaper/wallpaper_liste/wallpaper-list-3.webp\n'),
(5, '#D9AF77', ''),
(6, '#ADD3D9', 'img/wallpaper/wallpaper_liste/wallpaper-list-4.webp\n'),
(7, '#9EACD9', ''),
(8, '', 'img/wallpaper/wallpaper_liste/wallpaper-list-5.webp\n'),
(9, '#D9B6D3', 'img/wallpaper/wallpaper_liste/wallpaper-list-6.webp\n'),
(10, '#B5D877', ''),
(11, '', 'img/wallpaper/wallpaper_liste/wallpaper-list-7.webp\n'),
(12, '#D9C775', 'img/wallpaper/wallpaper_liste/wallpaper-list-8.webp\n');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `sfondo_ordine`
--
ALTER TABLE `sfondo_ordine`
  ADD PRIMARY KEY (`id_sfondo_ordine`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `sfondo_ordine`
--
ALTER TABLE `sfondo_ordine`
  MODIFY `id_sfondo_ordine` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
