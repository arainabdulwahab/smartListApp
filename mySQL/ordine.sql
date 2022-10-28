-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Ott 28, 2022 alle 09:14
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
-- Struttura della tabella `ordine`
--

CREATE TABLE `ordine` (
  `id_ordine` int(11) NOT NULL,
  `budget` double DEFAULT NULL,
  `data` date DEFAULT NULL,
  `importo` double DEFAULT NULL,
  `price_view` bit(1) DEFAULT NULL,
  `quantità_view` bit(1) DEFAULT NULL,
  `id_sfondo_ordine` int(11) DEFAULT NULL,
  `id_utente` int(11) DEFAULT NULL,
  `titolo` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `ordine`
--

INSERT INTO `ordine` (`id_ordine`, `budget`, `data`, `importo`, `price_view`, `quantità_view`, `id_sfondo_ordine`, `id_utente`, `titolo`) VALUES
(289, 50, '2022-10-25', 30, b'1', b'1', 1, 1, 'Lista spesa 25-10'),
(290, 0, '2022-10-26', 10, b'1', b'1', 2, 1, 'Lista spesa 26-10'),
(291, 0, '2022-10-27', 40, b'1', b'1', 3, 1, 'Lista spesa 27-10'),
(292, 50, '2022-10-25', 20, b'1', b'1', 4, 2, 'Lista spesa 25-10'),
(293, 0, '2022-10-26', 40, b'1', b'1', 5, 2, 'Lista spesa 26-10'),
(294, 100, '2022-10-27', 85, b'1', b'1', 6, 2, 'Lista spesa 27-10'),
(295, 60, '2022-10-25', 60, b'1', b'1', 7, 3, 'Lista spesa 25-10'),
(296, 0, '2022-10-26', 50, b'1', b'1', 8, 3, 'Lista spesa 26-10'),
(297, 70, '2022-10-27', 35, b'1', b'1', 9, 3, 'Lista spesa 27-10'),
(298, 0, '2022-10-25', 80, b'1', b'1', 10, 4, 'Lista spesa 25-10'),
(299, 10, '2022-10-26', 10, b'1', b'1', 11, 4, 'Lista spesa 26-10'),
(300, 0, '2022-10-27', 5, b'1', b'1', 12, 4, 'Lista spesa 27-10'),
(301, 60, '2022-10-25', 45, b'1', b'1', 1, 5, 'Lista spesa 25-10'),
(302, 0, '2022-10-26', 60, b'1', b'1', 2, 5, 'Lista spesa 26-10'),
(303, 50, '2022-10-27', 30, b'1', b'1', 3, 5, 'Lista spesa 27-10'),
(304, 0, '2022-10-25', 60, b'1', b'1', 4, 6, 'Lista spesa 25-10'),
(305, 55, '2022-10-26', 50, b'1', b'1', 5, 6, 'Lista spesa 26-10'),
(306, 0, '2022-10-27', 20, b'1', b'1', 6, 6, 'Lista spesa 27-10'),
(307, 0, '2022-10-25', 5, b'1', b'1', 7, 7, 'Lista spesa 25-10'),
(308, 40, '2022-10-26', 40, b'1', b'1', 8, 7, 'Lista spesa 26-10'),
(309, 50, '2022-10-27', 35, b'1', b'1', 9, 7, 'Lista spesa 27-10'),
(310, 30, '2022-10-25', 20, b'1', b'1', 10, 8, 'Lista spesa 25-10'),
(311, 70, '2022-10-26', 55, b'1', b'1', 11, 8, 'Lista spesa 26-10'),
(312, 0, '2022-10-27', 10, b'1', b'1', 12, 8, 'Lista spesa 27-10'),
(313, 100, '2022-10-25', 50, b'1', b'1', 1, 9, 'Lista spesa 25-10'),
(314, 20, '2022-10-26', 5, b'1', b'1', 2, 9, 'Lista spesa 26-10'),
(315, 150, '2022-10-27', 40, b'1', b'1', 3, 9, 'Lista spesa 27-10'),
(316, 70, '2022-10-25', 30, b'1', b'1', 4, 10, 'Lista spesa 25-10'),
(317, 0, '2022-10-26', 55, b'1', b'1', 5, 10, 'Lista spesa 26-10'),
(318, 75, '2022-10-27', 30, b'1', b'1', 6, 10, 'Lista spesa 27-10'),
(319, 40, '2022-10-25', 15, b'1', b'1', 7, 11, 'Lista spesa 25-10'),
(320, 0, '2022-10-26', 40, b'1', b'1', 8, 11, 'Lista spesa 26-10'),
(321, 90, '2022-10-27', 50, b'1', b'1', 9, 11, 'Lista spesa 27-10'),
(322, 110, '2022-10-25', 100, b'1', b'1', 10, 12, 'Lista spesa 25-10'),
(323, 200, '2022-10-26', 160, b'1', b'1', 11, 12, 'Lista spesa 26-10'),
(324, 40, '2022-10-27', 20, b'1', b'1', 12, 12, 'Lista spesa 27-10'),
(325, 50, '2022-10-25', 30, b'1', b'1', 1, 13, 'Lista spesa 25-10'),
(326, 0, '2022-10-26', 10, b'1', b'1', 2, 13, 'Lista spesa 26-10'),
(327, 60, '2022-10-27', 40, b'1', b'1', 3, 13, 'Lista spesa 27-10'),
(328, 0, '2022-10-25', 20, b'1', b'1', 4, 14, 'Lista spesa 25-10'),
(329, 70, '2022-10-26', 40, b'1', b'1', 5, 14, 'Lista spesa 26-10'),
(330, 100, '2022-10-27', 85, b'1', b'1', 6, 14, 'Lista spesa 27-10'),
(331, 60, '2022-10-25', 60, b'1', b'1', 7, 15, 'Lista spesa 25-10'),
(332, 0, '2022-10-26', 50, b'1', b'1', 8, 15, 'Lista spesa 26-10'),
(333, 70, '2022-10-27', 35, b'1', b'1', 9, 15, 'Lista spesa 27-10'),
(334, 150, '2022-10-25', 80, b'1', b'1', 10, 16, 'Lista spesa 25-10'),
(335, 0, '2022-10-26', 10, b'1', b'1', 11, 16, 'Lista spesa 26-10'),
(336, 15, '2022-10-27', 5, b'1', b'1', 12, 16, 'Lista spesa 27-10'),
(337, 60, '2022-10-25', 45, b'1', b'1', 1, 17, 'Lista spesa 25-10'),
(338, 0, '2022-10-26', 60, b'1', b'1', 2, 17, 'Lista spesa 26-10'),
(339, 50, '2022-10-27', 30, b'1', b'1', 3, 17, 'Lista spesa 27-10'),
(340, 0, '2022-10-25', 60, b'1', b'1', 4, 18, 'Lista spesa 25-10'),
(341, 55, '2022-10-26', 50, b'1', b'1', 5, 18, 'Lista spesa 26-10'),
(342, 20, '2022-10-27', 20, b'1', b'1', 6, 18, 'Lista spesa 27-10'),
(343, 20, '2022-10-25', 5, b'1', b'1', 7, 19, 'Lista spesa 25-10'),
(344, 0, '2022-10-26', 40, b'1', b'1', 8, 19, 'Lista spesa 26-10'),
(345, 50, '2022-10-27', 35, b'1', b'1', 9, 19, 'Lista spesa 27-10'),
(346, 0, '2022-10-25', 20, b'1', b'1', 10, 20, 'Lista spesa 25-10'),
(347, 70, '2022-10-26', 55, b'1', b'1', 11, 20, 'Lista spesa 26-10'),
(348, 90, '2022-10-27', 10, b'1', b'1', 12, 20, 'Lista spesa 27-10'),
(349, 0, '2022-10-25', 50, b'1', b'1', 1, 21, 'Lista spesa 25-10'),
(350, 20, '2022-10-26', 5, b'1', b'1', 2, 21, 'Lista spesa 26-10'),
(351, 150, '2022-10-27', 40, b'1', b'1', 3, 21, 'Lista spesa 27-10'),
(352, 70, '2022-10-25', 30, b'1', b'1', 4, 22, 'Lista spesa 25-10'),
(353, 90, '2022-10-26', 55, b'1', b'1', 5, 22, 'Lista spesa 26-10'),
(354, 75, '2022-10-27', 30, b'1', b'1', 6, 22, 'Lista spesa 27-10'),
(355, 0, '2022-10-25', 15, b'1', b'1', 7, 23, 'Lista spesa 25-10'),
(356, 85, '2022-10-26', 40, b'1', b'1', 8, 23, 'Lista spesa 26-10'),
(357, 90, '2022-10-27', 50, b'1', b'1', 9, 23, 'Lista spesa 27-10'),
(358, 0, '2022-10-25', 100, b'1', b'1', 10, 24, 'Lista spesa 25-10'),
(359, 200, '2022-10-26', 160, b'1', b'1', 11, 24, 'Lista spesa 26-10'),
(360, 40, '2022-10-27', 20, b'1', b'1', 12, 24, 'Lista spesa 27-10');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `ordine`
--
ALTER TABLE `ordine`
  ADD PRIMARY KEY (`id_ordine`),
  ADD KEY `FKl9kspgwvccy4ehujc0s51pt7j` (`id_sfondo_ordine`),
  ADD KEY `FKgsxxfj3dm1kfppteavqrvkwcr` (`id_utente`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `ordine`
--
ALTER TABLE `ordine`
  MODIFY `id_ordine` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=361;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
