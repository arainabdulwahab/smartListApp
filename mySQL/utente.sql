-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Ott 27, 2022 alle 10:47
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
-- Struttura della tabella `utente`
--

CREATE TABLE `utente` (
  `id_utente` int(11) NOT NULL,
  `cognome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `id_sfondo_utente` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `utente`
--

INSERT INTO `utente` (`id_utente`, `cognome`, `email`, `nome`, `password`, `id_sfondo_utente`) VALUES
(1, 'Rossi', 'rossi.sofia@gmail.com', 'Sofia', 'sofia.1', 1),
(2, 'Russo', 'russo-leonardo@libero.it', 'Leonardo', 'leonardo.1', 1),
(3, 'Ferrari', 'ferrari.giulia@gmail.com', 'Giulia', 'giulia.1', 1),
(4, 'Esposito', 'esposito-francesco@libero.it', 'Francesco', 'francesco.2', 2),
(5, 'Bianchi', 'bianchi.aurora@gmail.com', 'Aurora', 'aurora.2', 2),
(6, 'Romano', 'romano-alessandro@libero.it', 'Alessandro', 'alessandro.2', 2),
(7, 'Colombo', 'colombo.ginevra@gmail.com', 'Ginevra', 'ginevra.3', 3),
(8, 'Bruno', 'bruno-lorenzo@libero.it', 'Lorenzo', 'lorenzo.3', 3),
(9, 'Ricci', 'ricci.alice@gmail.com', 'Alice', 'alice.3', 3),
(10, 'Marino', 'marino-mattia@libero.it', 'Mattia', 'mattia.4', 4),
(11, 'Costa', 'costa.beatrice@gmail.com', 'Beatrice', 'beatrice.4', 4),
(12, 'Franco', 'franco-tommaso@libero.it', 'Tommaso', 'tommaso.4', 4),
(13, 'Gallo', 'gallo.emma@gmail.com', 'Emma', 'emma.5', 5),
(14, 'Conti', 'conti-gabriele@libero.it', 'Gabriele', 'gabriele.5', 5),
(15, 'Greco', 'greco.giorgia@gmail.com', 'Giorgia', 'giorgia.5', 5),
(16, 'Martino', 'martino-andrea@libero.it', 'Andrea', 'andrea.6', 6),
(17, 'Giordano', 'giordano.vittoria@gmail.com', 'Vittoria', 'vittoria.6', 6),
(18, 'Rizzo', 'rizzo-riccardo@libero.it', 'Riccardo', 'riccardo.6', 6),
(19, 'Mancini', 'mancini.vittoria@gmail.com', 'Matilde', 'matilde.7', 7),
(20, 'Villa', 'villa-edoardo@libero.it', 'Edoardo', 'edoardo.7', 7),
(21, 'Mauro', 'mauro.ilenia@gmail.com', 'Ilenia', 'ilenia.7', 7),
(22, 'Lombardi', 'lombardi-antonio@libero.it', 'Antonio', 'antonio.8', 8),
(23, 'Fontana', 'fontana.claudia@gmail.com', 'Claudia', 'claudia.8', 8),
(24, 'Barbieri', 'barbieri-giuseppe@libero.it', 'Giuseppe', 'giuseppe.8', 8);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `utente`
--
ALTER TABLE `utente`
  ADD PRIMARY KEY (`id_utente`),
  ADD KEY `FK8es4ium23l2mhketg8hcs0uhu` (`id_sfondo_utente`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `utente`
--
ALTER TABLE `utente`
  MODIFY `id_utente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
