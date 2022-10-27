-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Ott 27, 2022 alle 14:24
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
-- Struttura della tabella `item`
--

CREATE TABLE `item` (
  `id_item` int(11) NOT NULL,
  `prezzo` double DEFAULT NULL,
  `quantità` varchar(255) DEFAULT NULL,
  `spunta` bit(1) DEFAULT NULL,
  `id_ordine` int(11) DEFAULT NULL,
  `id_prodotto` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `item`
--

INSERT INTO `item` (`id_item`, `prezzo`, `quantità`, `spunta`, `id_ordine`, `id_prodotto`) VALUES
(1, 2, 'cassetta', b'0', 1, 4),
(2, 4, 'confezione', b'1', 1, 10),
(3, 3, 'bottiglia', b'1', 1, 20),
(4, 1.5, 'confezione', b'1', 1, 28),
(5, 2.5, 'confezione', b'0', 1, 32),
(6, 3, 'pacco', b'1', 1, 262),
(7, 1, 'scatoletta', b'1', 2, 248),
(8, 2, 'confezione', b'0', 2, 206),
(9, 3, 'confezione', b'1', 2, 194),
(10, 2, 'barattolo', b'0', 2, 143),
(11, 1.5, 'busta', b'0', 2, 129),
(12, 0.5, 'confezione', b'1', 2, 80),
(13, 2, 'confezione', b'1', 3, 31),
(14, 1, 'confezione', b'1', 3, 51),
(15, 2, 'busta', b'0', 3, 64),
(16, 5, 'bottigia', b'1', 4, 84),
(17, 3, 'confezione', b'1', 4, 86),
(18, 2, 'busta', b'1', 4, 99),
(19, 2.4, 'pacco', b'1', 4, 175),
(20, 3, 'fetta', b'1', 4, 192),
(21, 2, 'barattolo', b'0', 4, 203),
(22, 3, 'pacco', b'1', 5, 262),
(23, 2, 'busta', b'1', 5, 207),
(24, 6, 'bottiglia', b'0', 5, 173),
(25, 1, 'confezione', b'1', 5, 167),
(26, 0.5, 'spicchio', b'1', 5, 6),
(27, 2.5, 'cassa', b'1', 5, 5),
(28, 2, 'confezione', b'1', 5, 22),
(29, 1, 'casco', b'1', 6, 16),
(30, 0.7, 'una', b'1', 6, 11),
(31, 0.5, 'ciuffo', b'1', 6, 17),
(32, 2, 'confezione', b'0', 6, 24),
(33, 3, 'confezione', b'1', 6, 28),
(34, 2, 'barattolo', b'1', 6, 118),
(35, 5, 'confezione', b'0', 7, 147),
(36, 3, 'confezione', b'0', 7, 137),
(37, 6, 'bottiglia', b'1', 7, 106),
(38, 3, 'pacco', b'1', 7, 122),
(39, 2, 'bottiglia', b'0', 7, 220),
(40, 1.5, 'pacchetto', b'1', 7, 224),
(41, 15, 'confezione', b'1', 7, 233),
(42, 5, 'confezione', b'1', 8, 264),
(43, 0.5, 'gambo', b'1', 8, 181),
(44, 3, 'pacco', b'0', 8, 188),
(45, 2, 'confezione', b'1', 8, 172),
(46, 1.5, 'barattolo', b'1', 8, 184),
(47, 2, 'cassetta', b'1', 1, 4),
(48, 4, 'confezione', b'0', 1, 10),
(49, 3, 'bottiglia', b'1', 1, 20),
(50, 1.5, 'confezione', b'1', 1, 28),
(51, 2.5, 'confezione', b'0', 1, 32),
(52, 3, 'pacco', b'1', 1, 262),
(53, 1, 'scatoletta', b'1', 2, 248),
(54, 2, 'confezione', b'0', 2, 206),
(55, 3, 'confezione', b'1', 2, 194),
(56, 2, 'barattolo', b'1', 2, 143),
(57, 1.5, 'busta', b'1', 2, 129),
(58, 0.5, 'confezione', b'1', 2, 80),
(59, 2, 'confezione', b'1', 3, 31),
(60, 1, 'confezione', b'1', 3, 51),
(61, 2, 'busta', b'1', 3, 64),
(62, 5, 'bottigia', b'1', 4, 84),
(63, 3, 'confezione', b'1', 4, 86),
(64, 2, 'busta', b'1', 4, 99),
(65, 2.4, 'pacco', b'0', 4, 175),
(66, 3, 'fetta', b'1', 4, 192),
(67, 2, 'barattolo', b'1', 4, 203),
(68, 3, 'pacco', b'1', 5, 262),
(69, 2, 'busta', b'1', 5, 207),
(70, 6, 'bottiglia', b'1', 5, 173),
(71, 1, 'confezione', b'1', 5, 167),
(72, 0.5, 'spicchio', b'0', 5, 6),
(73, 2.5, 'cassa', b'1', 5, 5),
(74, 2, 'confezione', b'1', 5, 22),
(75, 1, 'casco', b'1', 6, 16),
(76, 0.7, 'una', b'1', 6, 11),
(77, 0.5, 'ciuffo', b'1', 6, 17),
(78, 2, 'confezione', b'1', 6, 24),
(79, 3, 'confezione', b'0', 6, 28),
(80, 2, 'barattolo', b'1', 6, 118),
(81, 5, 'confezione', b'0', 7, 147),
(82, 3, 'confezione', b'1', 7, 137),
(83, 6, 'bottiglia', b'1', 7, 106),
(84, 3, 'pacco', b'1', 7, 122),
(85, 2, 'bottiglia', b'1', 7, 220),
(86, 1.5, 'pacchetto', b'0', 7, 224),
(87, 15, 'confezione', b'1', 7, 233),
(88, 5, 'confezione', b'1', 8, 264),
(89, 0.5, 'gambo', b'1', 8, 181),
(90, 3, 'pacco', b'0', 8, 188),
(91, 2, 'confezione', b'1', 8, 172),
(92, 1.5, 'barattolo', b'1', 8, 184),
(93, 3, 'busta', b'0', 9, 7),
(94, 1, 'confezione', b'1', 9, 18),
(95, 2, 'cassetta', b'1', 9, 4),
(96, 3, 'busta', b'1', 9, 40),
(97, 2, 'confezione', b'1', 9, 48),
(98, 2, 'confezione', b'1', 9, 37),
(99, 2, 'lattina', b'1', 10, 19),
(100, 1.5, 'bottiglia', b'1', 10, 20),
(101, 2, 'confezione', b'1', 10, 28),
(102, 2, 'scatola', b'0', 10, 44),
(103, 1.5, 'pacco', b'1', 10, 52),
(104, 1, 'bottiglia', b'1', 11, 43),
(105, 1.2, 'bulbi', b'0', 11, 42),
(106, 0.5, 'bustina', b'1', 11, 46),
(107, 2, 'busta', b'1', 11, 128),
(108, 2, 'pezzo', b'1', 11, 161),
(109, 1.5, 'confezione', b'1', 11, 167),
(110, 2, 'confezione', b'1', 12, 188),
(111, 3, 'trancio', b'0', 12, 192),
(112, 1, 'vasetto', b'1', 12, 202),
(113, 1.5, 'confezione', b'1', 12, 212),
(114, 40, 'una', b'1', 13, 266),
(115, 5, 'uno', b'0', 13, 264),
(116, 3, 'boccetta', b'1', 13, 258),
(117, 7, 'boccetta', b'1', 13, 246),
(118, 8, 'due', b'1', 13, 249),
(119, 5, 'latta', b'1', 14, 231),
(120, 12, 'uno', b'1', 14, 230),
(121, 5, 'uno', b'1', 14, 210),
(122, 4, 'tanica', b'0', 14, 4),
(123, 3, 'confezione', b'1', 14, 20),
(124, 1.5, 'spicchi', b'1', 15, 6),
(125, 4, 'bottiglia', b'1', 15, 3),
(126, 3, 'barattolino', b'1', 15, 8),
(127, 4, 'scatolo', b'1', 15, 67),
(128, 3, 'confezione', b'1', 15, 76),
(129, 2, 'busta', b'1', 15, 71),
(130, 2, 'cassetta', b'1', 1, 4),
(131, 4, 'confezione', b'0', 1, 10),
(132, 3, 'bottiglia', b'0', 1, 20),
(133, 1.5, 'confezione', b'0', 1, 28),
(134, 2.5, 'confezione', b'1', 1, 32),
(135, 3, 'pacco', b'1', 1, 262),
(136, 1, 'scatoletta', b'1', 2, 248),
(137, 2, 'confezione', b'0', 2, 206),
(138, 3, 'confezione', b'1', 2, 194),
(139, 2, 'barattolo', b'1', 2, 143),
(140, 1.5, 'busta', b'1', 2, 129),
(141, 0.5, 'confezione', b'1', 2, 80),
(142, 2, 'confezione', b'0', 3, 31),
(143, 1, 'confezione', b'0', 3, 51),
(144, 2, 'busta', b'1', 3, 64),
(145, 5, 'bottigia', b'1', 4, 84),
(146, 3, 'confezione', b'1', 4, 86),
(147, 2, 'busta', b'0', 4, 99),
(148, 2.4, 'pacco', b'1', 4, 175),
(149, 3, 'fetta', b'1', 4, 192),
(150, 2, 'barattolo', b'1', 4, 203),
(151, 3, 'pacco', b'1', 5, 262),
(152, 2, 'busta', b'0', 5, 207),
(153, 6, 'bottiglia', b'1', 5, 173),
(154, 1, 'confezione', b'1', 5, 167),
(155, 0.5, 'spicchio', b'1', 5, 6),
(156, 2.5, 'cassa', b'1', 5, 5),
(157, 2, 'confezione', b'0', 5, 22),
(158, 1, 'casco', b'1', 6, 16),
(159, 0.7, 'una', b'1', 6, 11),
(160, 0.5, 'ciuffo', b'0', 6, 17),
(161, 2, 'confezione', b'1', 6, 24),
(162, 3, 'confezione', b'1', 6, 28),
(163, 2, 'barattolo', b'1', 6, 118),
(164, 5, 'confezione', b'1', 7, 147),
(165, 3, 'confezione', b'1', 7, 137),
(166, 6, 'bottiglia', b'0', 7, 106),
(167, 3, 'pacco', b'1', 7, 122),
(168, 2, 'bottiglia', b'1', 7, 220),
(169, 1.5, 'pacchetto', b'0', 7, 224),
(170, 15, 'confezione', b'1', 7, 233),
(171, 5, 'confezione', b'1', 8, 264),
(172, 0.5, 'gambo', b'1', 8, 181),
(173, 3, 'pacco', b'1', 8, 188),
(174, 2, 'confezione', b'0', 8, 172),
(175, 1.5, 'barattolo', b'1', 8, 184),
(176, 3, 'busta', b'1', 9, 7),
(177, 1, 'confezione', b'1', 9, 18),
(178, 2, 'cassetta', b'1', 9, 4),
(179, 3, 'busta', b'1', 9, 40),
(180, 2, 'confezione', b'0', 9, 48),
(181, 2, 'confezione', b'0', 9, 37),
(182, 2, 'lattina', b'1', 10, 19),
(183, 1.5, 'bottiglia', b'1', 10, 20),
(184, 2, 'confezione', b'0', 10, 28),
(185, 2, 'scatola', b'1', 10, 44),
(186, 1.5, 'pacco', b'1', 10, 52),
(187, 1, 'bottiglia', b'1', 11, 43),
(188, 1.2, 'bulbi', b'1', 11, 42),
(189, 0.5, 'bustina', b'1', 11, 46),
(190, 2, 'busta', b'1', 11, 128),
(191, 2, 'pezzo', b'0', 11, 161),
(192, 1.5, 'confezione', b'1', 11, 167),
(193, 2, 'confezione', b'1', 12, 188),
(194, 3, 'trancio', b'0', 12, 192),
(195, 1, 'vasetto', b'1', 12, 202),
(196, 1.5, 'confezione', b'1', 12, 212),
(197, 40, 'una', b'1', 13, 266),
(198, 5, 'uno', b'1', 13, 264),
(199, 3, 'boccetta', b'0', 13, 258),
(200, 7, 'boccetta', b'1', 13, 246),
(201, 8, 'due', b'1', 13, 249),
(202, 5, 'latta', b'1', 14, 231),
(203, 12, 'uno', b'1', 14, 230),
(204, 5, 'uno', b'1', 14, 210),
(205, 4, 'tanica', b'0', 14, 4),
(206, 3, 'confezione', b'0', 14, 20),
(207, 1.5, 'spicchi', b'1', 15, 6),
(208, 4, 'bottiglia', b'1', 15, 3),
(209, 3, 'barattolino', b'1', 15, 8),
(210, 4, 'scatolo', b'1', 15, 67),
(211, 3, 'confezione', b'1', 15, 76),
(212, 2, 'busta', b'1', 15, 71),
(213, 2, 'bottiglia', b'1', 16, 1),
(214, 0.5, 'spicchio', b'1', 16, 6),
(215, 2, 'sacco', b'1', 16, 13),
(216, 1, 'confezione', b'0', 16, 22),
(217, 1.3, 'confezione', b'1', 16, 24),
(218, 1.6, 'pacco', b'1', 17, 28),
(219, 3, 'barattolo', b'1', 17, 36),
(220, 2, 'confezione', b'1', 17, 31),
(221, 1.3, 'busta', b'1', 17, 35),
(222, 2, 'confezione', b'0', 17, 32),
(223, 3.5, 'un chilo', b'1', 18, 29),
(224, 1.5, '100g', b'1', 18, 40),
(225, 1.6, 'confezione', b'0', 18, 44),
(226, 2, 'cassetta', b'1', 18, 4),
(227, 4, 'confezione', b'1', 19, 10),
(228, 3, 'bottiglia', b'0', 19, 20),
(229, 1.5, 'confezione', b'0', 19, 28),
(230, 2.5, 'confezione', b'1', 20, 32),
(231, 3, 'pacco', b'1', 20, 262),
(232, 1, 'scatoletta', b'1', 20, 248),
(233, 2, 'confezione', b'1', 20, 206),
(234, 3, 'confezione', b'1', 20, 194),
(235, 2, 'barattolo', b'0', 21, 143),
(236, 1.5, 'busta', b'1', 21, 129),
(237, 0.5, 'confezione', b'1', 21, 80),
(238, 2, 'confezione', b'0', 21, 31),
(239, 1, 'confezione', b'1', 22, 51),
(240, 2, 'busta', b'0', 22, 64),
(241, 2, 'pezzo', b'1', 22, 161),
(242, 1.5, 'confezione', b'1', 22, 167),
(243, 2, 'confezione', b'1', 22, 188),
(244, 3, 'trancio', b'1', 23, 192),
(245, 1, 'vasetto', b'0', 23, 202),
(246, 1.5, 'confezione', b'1', 23, 212),
(247, 40, 'una', b'1', 24, 266),
(248, 5, 'uno', b'0', 24, 264),
(249, 3, 'boccetta', b'1', 24, 258),
(250, 1.5, 'pacchetto', b'1', 24, 224),
(251, 15, 'confezione', b'0', 24, 233),
(252, 5, 'confezione', b'0', 24, 264);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id_item`),
  ADD KEY `FKmbr4j8tqx1qs6q9ly0d11kwxs` (`id_ordine`),
  ADD KEY `FKktvq6wx520e44pij3xarvr9mc` (`id_prodotto`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `item`
--
ALTER TABLE `item`
  MODIFY `id_item` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=253;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
