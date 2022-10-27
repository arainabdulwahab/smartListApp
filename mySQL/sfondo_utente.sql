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
-- Struttura della tabella `sfondo_utente`
--

CREATE TABLE `sfondo_utente` (
  `id_sfondo_utente` int(11) NOT NULL,
  `darkmode` bit(1) DEFAULT NULL,
  `uri` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `sfondo_utente`
--

INSERT INTO `sfondo_utente` (`id_sfondo_utente`, `darkmode`, `uri`) VALUES
(1, b'0', 'img/wallpaper/wallpaper_utenti/wallpaper-user-1.webp\n'),
(2, b'1', 'img/wallpaper/wallpaper_utenti/wallpaper-user-2.webp'),
(3, b'1', 'img/wallpaper/wallpaper_utenti/wallpaper-user-3.webp'),
(4, b'0', 'img/wallpaper/wallpaper_utenti/wallpaper-user-4.webp'),
(5, b'1', 'img/wallpaper/wallpaper_utenti/wallpaper-user-5.webp'),
(6, b'1', 'img/wallpaper/wallpaper_utenti/wallpaper-user-6.webp'),
(7, b'0', 'img/wallpaper/wallpaper_utenti/wallpaper-user-7.webp'),
(8, b'0', 'img/wallpaper/wallpaper_utenti/wallpaper-user-8.webp'),
(9, b'1', 'img/wallpaper/wallpaper_utenti/wallpaper-user-1.webp'),
(10, b'1', 'img/wallpaper/wallpaper_utenti/wallpaper-user-2.webp'),
(11, b'0', 'img/wallpaper/wallpaper_utenti/wallpaper-user-3.webp'),
(12, b'1', 'img/wallpaper/wallpaper_utenti/wallpaper-user-4.webp'),
(13, b'0', 'img/wallpaper/wallpaper_utenti/wallpaper-user-5.webp'),
(14, b'0', 'img/wallpaper/wallpaper_utenti/wallpaper-user-6.webp'),
(15, b'1', 'img/wallpaper/wallpaper_utenti/wallpaper-user-7.webp'),
(16, b'0', 'img/wallpaper/wallpaper_utenti/wallpaper-user-8.webp'),
(17, b'1', 'img/wallpaper/wallpaper_utenti/wallpaper-user-8.webp'),
(18, b'1', 'img/wallpaper/wallpaper_utenti/wallpaper-user-7.webp'),
(19, b'0', 'img/wallpaper/wallpaper_utenti/wallpaper-user-6.webp'),
(20, b'1', 'img/wallpaper/wallpaper_utenti/wallpaper-user-5.webp'),
(21, b'0', 'img/wallpaper/wallpaper_utenti/wallpaper-user-4.webp'),
(22, b'1', 'img/wallpaper/wallpaper_utenti/wallpaper-user-3.webp'),
(23, b'1', 'img/wallpaper/wallpaper_utenti/wallpaper-user-2.webp'),
(24, b'0', 'img/wallpaper/wallpaper_utenti/wallpaper-user-1.webp');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `sfondo_utente`
--
ALTER TABLE `sfondo_utente`
  ADD PRIMARY KEY (`id_sfondo_utente`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `sfondo_utente`
--
ALTER TABLE `sfondo_utente`
  MODIFY `id_sfondo_utente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
