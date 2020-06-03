-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2020 at 11:13 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.1.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `socialdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `text` varchar(1000) NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `text`, `parent_id`, `post_id`, `user_id`, `created_at`) VALUES
(1, 'first comment', NULL, 2, 1, '2020-01-23 20:10:50'),
(10, 'second reply', 1, 2, 1, '2020-01-23 18:44:54'),
(13, 'first comment', NULL, 2, 1, '2020-01-24 12:42:22'),
(14, 'youpyyy', NULL, 21, 5, '2020-02-04 14:07:34'),
(15, 'boooooooom', NULL, 82, 5, '2020-02-04 15:54:56'),
(16, 'boooooooom', NULL, 82, 5, '2020-02-04 15:54:56'),
(17, 'boooooooom', NULL, 82, 5, '2020-02-04 15:54:56'),
(18, 'boooooooom', NULL, 82, 3, '2020-02-04 15:55:13'),
(19, 'boooooooom', NULL, 82, 4, '2020-02-04 15:55:23'),
(20, 'boooooooom', NULL, 82, 1, '2020-02-04 15:55:56'),
(21, 'boooooooom', NULL, 82, 5, '2020-02-04 15:56:08'),
(22, 'boooooooom', NULL, 82, 3, '2020-02-04 15:56:17'),
(23, 'boooooooom', NULL, 82, 1, '2020-02-04 15:56:27'),
(28, 'this is the first comment from expo', NULL, 2, 3, '2020-02-05 14:38:35'),
(29, 'this is the second comment from expo', NULL, 2, 3, '2020-02-05 14:40:06'),
(30, 'After saga', NULL, 82, 3, '2020-02-05 14:49:47'),
(31, 'After', NULL, 82, 3, '2020-02-05 14:50:24'),
(32, 'Jjjj', NULL, 82, 3, '2020-02-05 14:51:06'),
(33, 'Ddf', NULL, 82, 3, '2020-02-05 14:52:48'),
(34, 'Gghb', NULL, 82, 3, '2020-02-05 14:55:01'),
(35, 'Rhdhdhdhfhfhfhf', NULL, 82, 3, '2020-02-05 15:01:30'),
(36, 'Youssef mfrod myzhrsh', NULL, 82, 3, '2020-02-05 15:01:41'),
(37, 'Rhdhd', NULL, 82, 3, '2020-02-05 15:09:11'),
(38, '0', NULL, 161, 3, '2020-02-07 15:12:33'),
(39, 'Dgxhd', NULL, 217, 3, '2020-02-08 13:33:04'),
(40, 'Rhdh', NULL, 217, 3, '2020-02-08 13:33:59'),
(41, 'Dhdhd', NULL, 217, 3, '2020-02-08 13:34:27'),
(42, 'Raouf', NULL, 217, 3, '2020-02-08 13:34:54'),
(43, 'Hdfv', NULL, 217, 3, '2020-02-08 13:36:07'),
(44, 'Lol', NULL, 217, 3, '2020-02-08 13:41:09'),
(45, 'Fjr', NULL, 217, 3, '2020-02-08 13:42:03'),
(46, 'Eud', NULL, 217, 3, '2020-02-08 13:43:36'),
(47, 'Dhdhd', NULL, 217, 3, '2020-02-08 13:45:07'),
(48, 'Hff', NULL, 217, 3, '2020-02-08 13:46:38'),
(49, 'Gg', NULL, 217, 3, '2020-02-08 14:10:56'),
(50, 'Lolo', NULL, 217, 3, '2020-02-08 14:11:44'),
(51, 'Hsd', NULL, 217, 3, '2020-02-08 14:12:39'),
(52, 'Djdjfj', NULL, 217, 3, '2020-02-08 14:18:12'),
(53, '5h', NULL, 217, 3, '2020-02-08 14:19:08'),
(54, 'Gf', NULL, 217, 3, '2020-02-08 14:19:32'),
(55, 'Yoyo', NULL, 217, 3, '2020-02-08 14:21:00'),
(56, 'Shdhe', NULL, 217, 3, '2020-02-08 14:21:16'),
(57, 'Ghh', NULL, 217, 3, '2020-02-08 14:21:36'),
(58, 'Hh', NULL, 217, 3, '2020-02-08 14:21:45'),
(59, 'Dhd', NULL, 217, 3, '2020-02-08 14:21:52'),
(60, 'Dhdh', NULL, 217, 3, '2020-02-08 14:22:45'),
(61, 'Fggg', NULL, 217, 3, '2020-02-08 14:23:13'),
(62, 'Tvhdf', NULL, 216, 3, '2020-02-08 14:23:33'),
(63, 'Fhd', NULL, 216, 3, '2020-02-08 14:23:51'),
(64, 'Lol', NULL, 216, 3, '2020-02-08 14:24:01'),
(65, 'Fjf', NULL, 216, 3, '2020-02-08 14:24:11'),
(66, 'Haha', NULL, 215, 3, '2020-02-08 14:25:38'),
(67, 'Hhhh', NULL, 215, 3, '2020-02-08 14:25:43'),
(68, '3beet', NULL, 215, 3, '2020-02-08 14:25:48'),
(69, 'Oooo', NULL, 215, 3, '2020-02-08 14:25:54'),
(70, 'XD', NULL, 215, 3, '2020-02-08 14:25:59'),
(71, 'Fhshs', NULL, 215, 3, '2020-02-08 14:26:04'),
(72, 'Meen dah yaadd', NULL, 215, 3, '2020-02-08 14:26:04'),
(73, 'Fhrhd', NULL, 215, 3, '2020-02-08 14:26:07'),
(74, 'Hgg', NULL, 214, 3, '2020-02-08 14:36:30'),
(75, 'Grd', NULL, 212, 3, '2020-02-08 14:36:47'),
(76, 'Hh', NULL, 212, 3, '2020-02-08 14:37:12'),
(77, 'Good', NULL, 212, 3, '2020-02-08 14:37:31'),
(78, 'Hhhh', NULL, 212, 3, '2020-02-08 14:37:36'),
(79, 'Fffff', NULL, 217, 3, '2020-02-08 14:38:07'),
(80, 'Hhh', NULL, 212, 3, '2020-02-08 14:38:18'),
(81, 'Call', NULL, 212, 3, '2020-02-08 14:38:45'),
(82, 'Uu', NULL, 217, 3, '2020-02-08 14:44:49'),
(83, 'Ana hna', NULL, 217, 3, '2020-02-08 14:44:52'),
(84, 'Goo', NULL, 216, 3, '2020-02-08 14:45:08'),
(85, 'Hffjf', NULL, 217, 3, '2020-02-08 14:45:18'),
(86, 'Yla', NULL, 217, 3, '2020-02-08 15:21:30'),
(87, 'Rh', NULL, 215, 3, '2020-02-08 15:21:43'),
(88, ' Ok', NULL, 215, 3, '2020-02-08 15:21:58'),
(89, 'Gbh', NULL, 210, 3, '2020-02-10 16:43:10'),
(90, 'Fhrhfjf', NULL, 217, 3, '2020-02-11 16:05:12'),
(91, 'Ggggjjj\nJjj\n\nJjjjj', NULL, 223, 3, '2020-02-12 16:02:29'),
(92, 'L', NULL, 223, 43, '2020-03-14 19:13:45');

-- --------------------------------------------------------

--
-- Table structure for table `emojis`
--

CREATE TABLE `emojis` (
  `type` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `emojis`
--

INSERT INTO `emojis` (`type`, `post_id`, `user_id`) VALUES
(1, 223, 3),
(2, 208, 3),
(2, 217, 3),
(2, 217, 7),
(3, 209, 3),
(3, 217, 6),
(4, 211, 3),
(4, 213, 3),
(4, 217, 1),
(5, 210, 3),
(5, 217, 4),
(6, 214, 3),
(6, 217, 5);

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE `followers` (
  `id` int(11) NOT NULL,
  `from_user` int(11) NOT NULL,
  `to_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `followers`
--

INSERT INTO `followers` (`id`, `from_user`, `to_user`) VALUES
(6, 1, 3),
(7, 43, 44),
(8, 43, 3),
(9, 43, 1);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `text` text NOT NULL,
  `from_user` int(11) NOT NULL,
  `room_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `text`, `from_user`, `room_id`) VALUES
(27, 'ya rb', 43, 1),
(28, 'brod 3leek', 44, 1),
(29, 'Ya allah', 43, 1),
(30, '7elw', 43, 1),
(31, 'Gmeel', 43, 8),
(32, 'Haha', 43, 1),
(33, 'Hahahaha', 43, 1),
(34, 'Very funny', 43, 1),
(35, 'Lol', 43, 8),
(36, 'Zeee', 43, 8),
(37, 'XD', 43, 8),
(38, 'Hahaaaa', 43, 8),
(39, 'Lol', 43, 8),
(40, 'Ya man', 43, 8),
(41, 'Lol', 43, 8),
(42, 'My man', 43, 8),
(43, 'Hush', 43, 8),
(44, 'Shush', 43, 8),
(45, 'Gameeed', 43, 1),
(46, 'Haha', 43, 1),
(47, '7elw', 43, 8),
(48, 'Cjdj', 43, 1),
(49, 'Nsdj', 43, 1),
(50, 'Jdhd', 43, 1),
(51, 'Djdbd', 43, 1),
(52, 'Dndjd', 43, 1),
(53, 'Hdhd', 43, 1),
(54, 'Lol', 43, 1),
(55, 'Ahahaha', 43, 1),
(56, 'Dhdhshshd', 43, 1),
(57, 'Sbskgpg', 43, 1),
(58, 'Lweh', 43, 1),
(59, 'Mra w7da', 43, 1),
(60, 'B', 43, 1),
(61, 'Ha', 43, 8),
(62, 'Leh ', 43, 1),
(63, ':(', 43, 1),
(64, '😢', 43, 8),
(65, 'G', 43, 8),
(66, 'H', 43, 8),
(67, 'Bol', 43, 8),
(68, 'Hh', 43, 1),
(69, 'Sall', 43, 8),
(70, 'Shhh', 43, 1),
(71, 'Aga', 43, 8),
(72, 'Hh', 43, 1),
(73, 'Ea da', 43, 8),
(74, 'Sg', 43, 1),
(75, 'Haha', 43, 8),
(76, 'H', 43, 1),
(77, 'Mmm9', 43, 8),
(78, 'H', 43, 1),
(79, 'S', 43, 1),
(80, 'Hh', 43, 8),
(81, 'G', 43, 1),
(82, 'D', 43, 8),
(83, 'H', 43, 1),
(84, 'B', 43, 8),
(85, 'H', 43, 1),
(86, 'Sss', 43, 1),
(87, 'Haha', 43, 8),
(88, 'Sslol', 43, 1),
(89, 'Hey', 44, 1),
(90, 'Meen m3aya', 43, 1),
(91, 'Ana youssef enta meen', 43, 1),
(92, 'Hey', 43, 8),
(93, 'EH ya man', 44, 1),
(94, 'Lol', 44, 1),
(95, 'Xhd', 44, 1),
(96, 'Dhd', 44, 1),
(97, 'Fhfh', 44, 1),
(98, 'Tg', 43, 8),
(99, 'Gaha', 44, 1),
(100, 'Ssss', 44, 9),
(101, 'Es7a', 43, 1),
(102, 'Wss', 44, 1),
(103, 'Shdhd', 43, 1),
(104, 'Jj', 44, 9),
(105, 'Dhdhdhd', 43, 1),
(106, 'Ee', 43, 1),
(107, 'Dhdh', 43, 1),
(108, 'Fgg', 44, 1),
(109, 'Ed', 43, 8),
(110, 'Hey', 44, 1),
(111, 'Hshs', 43, 1),
(112, 'Dd', 44, 9),
(113, 'Fhs', 44, 1),
(114, 'Hhh', 44, 1),
(115, '3amel eah', 43, 1),
(116, 'كويس', 44, 1),
(117, 'Dayman', 43, 1),
(118, 'Ya ahbaaal', 44, 1),
(119, 'Dhshd', 43, 8),
(120, 'Yes', 44, 1),
(121, 'Eah', 44, 1),
(122, 'Kk', 44, 1),
(123, 'Vhh', 44, 1),
(124, 'Vhgg', 44, 1),
(125, 'Ggg', 44, 9),
(126, 'Vbv', 44, 9),
(127, 'Hhhhh', 44, 9),
(128, 'Uuuuu', 44, 9),
(129, '9999', 44, 9),
(130, 'Hhhh', 44, 9),
(131, 'Uuuuuu', 44, 9),
(132, 'Yyyyyy', 44, 9),
(133, 'Rrrrr', 44, 9),
(134, 'Ddfffff', 44, 9),
(135, 'Lol', 43, 1);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `text` varchar(1000) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `url` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `video_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `text`, `user_id`, `url`, `created_at`, `video_name`) VALUES
(2, 'this is an update', 1, NULL, '2020-03-09 17:45:10', ''),
(21, 'gegegegefgdfg', 1, NULL, '2020-03-09 17:45:10', ''),
(22, 'yougg', 1, NULL, '2020-03-09 17:45:10', ''),
(23, 'ddd', 1, NULL, '2020-03-09 17:45:10', ''),
(24, 'rrrr', 1, NULL, '2020-03-09 17:45:10', ''),
(27, 'raouf', 4, NULL, '2020-03-09 17:45:10', ''),
(28, 'asdasd', 5, NULL, '2020-03-09 17:45:10', ''),
(29, 'dfhgfhgh', 3, NULL, '2020-03-09 17:45:10', ''),
(30, 'ifffdsf', 1, NULL, '2020-03-09 17:45:10', ''),
(31, 'this is a post', 4, NULL, '2020-03-09 17:45:10', ''),
(32, 'this is a post', 4, NULL, '2020-03-09 17:45:10', ''),
(33, 'this is a post', 5, NULL, '2020-03-09 17:45:10', ''),
(34, 'this is a post', 3, NULL, '2020-03-09 17:45:10', ''),
(35, 'this is a post', 3, NULL, '2020-03-09 17:45:10', ''),
(36, 'this is a post version2', 5, NULL, '2020-03-09 17:45:10', ''),
(37, 'this is a post version2', 3, NULL, '2020-03-09 17:45:10', ''),
(38, 'this is a post version2', 5, NULL, '2020-03-09 17:45:10', ''),
(39, 'this is a post version2', 3, NULL, '2020-03-09 17:45:10', ''),
(40, 'b3111', 3, NULL, '2020-03-09 17:45:10', ''),
(41, 'first post from expo', 1, NULL, '2020-03-09 17:45:10', ''),
(42, 'first post from expo', 1, NULL, '2020-03-09 17:45:10', ''),
(43, 'first post from expo', 1, NULL, '2020-03-09 17:45:10', ''),
(44, 'first post from expo', 1, NULL, '2020-03-09 17:45:10', ''),
(45, 'first post from expo', 1, NULL, '2020-03-09 17:45:10', ''),
(46, 'first post from expo', 1, NULL, '2020-03-09 17:45:10', ''),
(47, 'first post from expo', 1, NULL, '2020-03-09 17:45:10', ''),
(48, 'first post from expo', 1, NULL, '2020-03-09 17:45:10', ''),
(49, 'second post from expo', 1, NULL, '2020-03-09 17:45:10', ''),
(50, 'second post from expo', 1, NULL, '2020-03-09 17:45:10', ''),
(51, 'second post from expo', 1, NULL, '2020-03-09 17:45:10', ''),
(52, 'second post from expo', 1, NULL, '2020-03-09 17:45:10', ''),
(53, 'second post from expo', 1, NULL, '2020-03-09 17:45:10', ''),
(54, 'second post from expo', 1, NULL, '2020-03-09 17:45:10', ''),
(55, 'second post from expo', 1, NULL, '2020-03-09 17:45:10', ''),
(56, 'second post from expo', 1, NULL, '2020-03-09 17:45:10', ''),
(57, 'second post from expo', 1, NULL, '2020-03-09 17:45:10', ''),
(58, 'second post from expo', 1, NULL, '2020-03-09 17:45:10', ''),
(59, 'second post from expo', 1, NULL, '2020-03-09 17:45:10', ''),
(60, 'second post from expo', 1, NULL, '2020-03-09 17:45:10', ''),
(61, 'sfsdf', 1, NULL, '2020-03-09 17:45:10', ''),
(62, 'sfsdf', 1, NULL, '2020-03-09 17:45:10', ''),
(63, 'sfsdf', 1, NULL, '2020-03-09 17:45:10', ''),
(64, 'Ya rb', 1, NULL, '2020-03-09 17:45:10', ''),
(65, '2', 1, NULL, '2020-03-09 17:45:10', ''),
(66, '666', 1, NULL, '2020-03-09 17:45:10', ''),
(67, 'Hhhhg', 1, NULL, '2020-03-09 17:45:10', ''),
(68, 'Jjh', 1, NULL, '2020-03-09 17:45:10', ''),
(69, 'Oo', 1, NULL, '2020-03-09 17:45:10', ''),
(70, 'Gg', 1, NULL, '2020-03-09 17:45:10', ''),
(71, 'I', 1, NULL, '2020-03-09 17:45:10', ''),
(72, 'Y', 1, NULL, '2020-03-09 17:45:10', ''),
(73, '7u', 1, NULL, '2020-03-09 17:45:10', ''),
(74, 'G', 1, NULL, '2020-03-09 17:45:10', ''),
(75, 'Uu', 1, NULL, '2020-03-09 17:45:10', ''),
(76, 'Hh', 1, NULL, '2020-03-09 17:45:10', ''),
(77, 'K', 1, NULL, '2020-03-09 17:45:10', ''),
(78, 'Yty', 1, NULL, '2020-03-09 17:45:10', ''),
(79, 'H', 1, NULL, '2020-03-09 17:45:10', ''),
(80, 'J', 1, NULL, '2020-03-09 17:45:10', ''),
(82, 'Yyyuuu', 3, NULL, '2020-03-09 17:45:10', ''),
(83, 'Lol', 3, NULL, '2020-03-09 17:45:10', ''),
(84, 'Lol', 3, NULL, '2020-03-09 17:45:10', ''),
(85, 'XD', 3, NULL, '2020-03-09 17:45:10', ''),
(86, 'Dd', 3, NULL, '2020-03-09 17:45:10', ''),
(87, 'Boom', 3, NULL, '2020-03-09 17:45:10', ''),
(88, 'Vvvc', 3, NULL, '2020-03-09 17:45:10', ''),
(89, 'A', 3, NULL, '2020-03-09 17:45:10', ''),
(90, 'A', 3, NULL, '2020-03-09 17:45:10', ''),
(91, 'Hhhh', 3, NULL, '2020-03-09 17:45:10', ''),
(92, 'Hhhh', 3, NULL, '2020-03-09 17:45:10', ''),
(93, 'Rrtt', 3, NULL, '2020-03-09 17:45:10', ''),
(94, 'Saa', 3, NULL, '2020-03-09 17:45:10', ''),
(95, 'Dheyeue', 3, NULL, '2020-03-09 17:45:10', ''),
(96, 'Dfgg', 3, NULL, '2020-03-09 17:45:10', ''),
(97, 'Www', 3, NULL, '2020-03-09 17:45:10', ''),
(98, 'Tdfbcc', 3, NULL, '2020-03-09 17:45:10', ''),
(99, 'Kfzhg', 3, NULL, '2020-03-09 17:45:10', ''),
(100, 'Vgf', 3, NULL, '2020-03-09 17:45:10', ''),
(101, 'Fgnh', 3, NULL, '2020-03-09 17:45:10', ''),
(102, 'Hfjfhh', 3, NULL, '2020-03-09 17:45:10', ''),
(103, 'Dagg', 3, NULL, '2020-03-09 17:45:10', ''),
(104, 'Hil', 3, NULL, '2020-03-09 17:45:10', ''),
(105, 'Tohoy', 3, NULL, '2020-03-09 17:45:10', ''),
(106, 'Uj', 3, NULL, '2020-03-09 17:45:10', ''),
(107, '123', 3, NULL, '2020-03-09 17:45:10', ''),
(108, 'Wfg', 3, NULL, '2020-03-09 17:45:10', ''),
(109, 'Lolipop', 3, NULL, '2020-03-09 17:45:10', ''),
(110, 'Zz', 3, NULL, '2020-03-09 17:45:10', ''),
(111, 'Hcdgg', 3, NULL, '2020-03-09 17:45:10', ''),
(112, 'H', 3, NULL, '2020-03-09 17:45:10', ''),
(113, 'X', 3, NULL, '2020-03-09 17:45:10', ''),
(114, 'Xcvb', 3, NULL, '2020-03-09 17:45:10', ''),
(115, 'Hdas', 3, NULL, '2020-03-09 17:45:10', ''),
(116, 'Jf', 3, NULL, '2020-03-09 17:45:10', ''),
(117, 'Yy', 3, NULL, '2020-03-09 17:45:10', ''),
(118, 'Popa', 3, NULL, '2020-03-09 17:45:10', ''),
(119, 'Lopa', 3, NULL, '2020-03-09 17:45:10', ''),
(120, 'Xxx', 3, NULL, '2020-03-09 17:45:10', ''),
(121, 'Nono', 3, NULL, '2020-03-09 17:45:10', ''),
(122, '1357', 3, NULL, '2020-03-09 17:45:10', ''),
(123, '777777', 3, NULL, '2020-03-09 17:45:10', ''),
(124, 'Gfsd', 3, NULL, '2020-03-09 17:45:10', ''),
(125, '77777', 3, NULL, '2020-03-09 17:45:10', ''),
(126, '8888', 3, NULL, '2020-03-09 17:45:10', ''),
(127, '9999', 3, NULL, '2020-03-09 17:45:10', ''),
(128, '1000', 3, NULL, '2020-03-09 17:45:10', ''),
(129, '5437', 3, NULL, '2020-03-09 17:45:10', ''),
(130, '532', 3, NULL, '2020-03-09 17:45:10', ''),
(131, '0000', 3, NULL, '2020-03-09 17:45:10', ''),
(132, '9990', 3, NULL, '2020-03-09 17:45:10', ''),
(133, 'Wd', 3, NULL, '2020-03-09 17:45:10', ''),
(134, 'Cqj7', 3, NULL, '2020-03-09 17:45:10', ''),
(135, 'Qqq', 3, NULL, '2020-03-09 17:45:10', ''),
(136, '1234457', 3, NULL, '2020-03-09 17:45:10', ''),
(137, 'F', 3, NULL, '2020-03-09 17:45:10', ''),
(138, '10', 3, NULL, '2020-03-09 17:45:10', ''),
(139, 'Youssef', 3, NULL, '2020-03-09 17:45:10', ''),
(140, 'Raouf', 3, NULL, '2020-03-09 17:45:10', ''),
(141, '67', 3, NULL, '2020-03-09 17:45:10', ''),
(142, '87', 3, NULL, '2020-03-09 17:45:10', ''),
(143, '7', 3, NULL, '2020-03-09 17:45:10', ''),
(144, '236', 3, NULL, '2020-03-09 17:45:10', ''),
(145, '4568', 3, NULL, '2020-03-09 17:45:10', ''),
(146, '5h', 3, NULL, '2020-03-09 17:45:10', ''),
(147, 'V', 3, NULL, '2020-03-09 17:45:10', ''),
(148, '34', 3, NULL, '2020-03-09 17:45:10', ''),
(149, '56', 3, NULL, '2020-03-09 17:45:10', ''),
(150, 'O', 3, NULL, '2020-03-09 17:45:10', ''),
(151, 'Iop', 3, NULL, '2020-03-09 17:45:10', ''),
(152, 'F', 3, NULL, '2020-03-09 17:45:10', ''),
(153, 'E8', 3, NULL, '2020-03-09 17:45:10', ''),
(154, 'R7', 3, NULL, '2020-03-09 17:45:10', ''),
(155, 'Ehf', 3, NULL, '2020-03-09 17:45:10', ''),
(156, 'If', 3, NULL, '2020-03-09 17:45:10', ''),
(157, 'Sd', 3, NULL, '2020-03-09 17:45:10', ''),
(158, 'Lol', 3, NULL, '2020-03-09 17:45:10', ''),
(159, 'Rh', 3, NULL, '2020-03-09 17:45:10', ''),
(160, '93', 3, NULL, '2020-03-09 17:45:10', ''),
(161, 'Apy', 3, NULL, '2020-03-09 17:45:10', ''),
(162, 'J', 3, NULL, '2020-03-09 17:45:10', ''),
(163, 'Sydhffh', 3, NULL, '2020-03-09 17:45:10', ''),
(164, 'Fjfjdjd', 3, NULL, '2020-03-09 17:45:10', ''),
(165, 'Hjff', 3, NULL, '2020-03-09 17:45:10', ''),
(166, 'Hff', 3, NULL, '2020-03-09 17:45:10', ''),
(167, 'Fnfhfj', 3, NULL, '2020-03-09 17:45:10', ''),
(168, 'Hr647r6', 3, NULL, '2020-03-09 17:45:10', ''),
(169, 'Fff', 3, NULL, '2020-03-09 17:45:10', ''),
(170, 'Chs', 3, NULL, '2020-03-09 17:45:10', ''),
(171, 'Fhfbsi', 3, NULL, '2020-03-09 17:45:10', ''),
(172, 'Di', 3, NULL, '2020-03-09 17:45:10', ''),
(173, 'Hhi', 3, NULL, '2020-03-09 17:45:10', ''),
(174, 'Thi', 3, NULL, '2020-03-09 17:45:10', ''),
(175, '84i', 3, NULL, '2020-03-09 17:45:10', ''),
(176, 'Ay', 3, NULL, '2020-03-09 17:45:10', ''),
(177, 'Ru', 3, NULL, '2020-03-09 17:45:10', ''),
(178, 'Rhe', 3, NULL, '2020-03-09 17:45:10', ''),
(179, 'Dhr', 3, NULL, '2020-03-09 17:45:10', ''),
(180, 'Gfd', 3, NULL, '2020-03-09 17:45:10', ''),
(181, 'Ke', 3, NULL, '2020-03-09 17:45:10', ''),
(182, 'Fehv', 3, NULL, '2020-03-09 17:45:10', ''),
(183, 'F', 3, NULL, '2020-03-09 17:45:10', ''),
(184, 'W', 3, NULL, '2020-03-09 17:45:10', ''),
(185, 'Qqqqq', 3, NULL, '2020-03-09 17:45:10', ''),
(186, 'Sjewr', 3, NULL, '2020-03-09 17:45:10', ''),
(187, 'Aaaaaaa', 3, NULL, '2020-03-09 17:45:10', ''),
(188, 'Ajls', 3, NULL, '2020-03-09 17:45:10', ''),
(189, '124', 3, NULL, '2020-03-09 17:45:10', ''),
(190, 'U16', 3, NULL, '2020-03-09 17:45:10', ''),
(191, 'Wdit62', 3, NULL, '2020-03-09 17:45:10', ''),
(192, 'Whs', 3, NULL, '2020-03-09 17:45:10', ''),
(193, 'Ffhjf', 3, NULL, '2020-03-09 17:45:10', ''),
(194, '11111', 3, NULL, '2020-03-09 17:45:10', ''),
(195, '22222', 3, NULL, '2020-03-09 17:45:10', ''),
(196, '3333', 3, NULL, '2020-03-09 17:45:10', ''),
(197, '44444', 3, NULL, '2020-03-09 17:45:10', ''),
(198, '777', 3, NULL, '2020-03-09 17:45:10', ''),
(199, '88', 3, NULL, '2020-03-09 17:45:10', ''),
(200, 'Ew', 3, NULL, '2020-03-09 17:45:10', ''),
(201, 'Bm', 3, NULL, '2020-03-09 17:45:10', ''),
(202, 'St', 3, NULL, '2020-03-09 17:45:10', ''),
(203, 'Td', 3, NULL, '2020-03-09 17:45:10', ''),
(204, 'Lol', 3, NULL, '2020-03-09 17:45:10', ''),
(205, 'Daniel 3beet', 3, NULL, '2020-03-09 17:45:10', ''),
(206, 'Michael 3beet', 3, NULL, '2020-03-09 17:45:10', ''),
(207, 'Loris 3beeta', 3, NULL, '2020-03-09 17:45:10', ''),
(208, 'Didod', 3, NULL, '2020-03-09 17:45:10', ''),
(209, 'Youssef gameeel', 3, NULL, '2020-03-09 17:45:10', ''),
(210, 'No he is not', 3, NULL, '2020-03-09 17:45:10', ''),
(211, 'Ana is a great place to be and I hope ', 3, NULL, '2020-03-09 17:45:10', ''),
(212, 'Yes he is still available for a call and I will call you on the number you need ', 3, NULL, '2020-03-09 17:45:10', ''),
(213, 'Okay', 3, NULL, '2020-03-09 17:45:10', ''),
(214, 'Ggfff', 3, NULL, '2020-03-09 17:45:10', ''),
(215, 'Eah', 3, NULL, '2020-03-09 17:45:10', ''),
(216, 'Try edit the link and add it to your own website or send it to the new site or send it to your office and send it to you later in the week for sure to send it to you later today if you need to get a hold of us for the next few weeks so we have it on our calendars for for the next few weeks and we will be only needing to get a varity for the most recent years to come and visit our house and we will be only needing to get a better idea of what ', 3, NULL, '2020-03-09 17:45:10', ''),
(217, 'Ss', 3, NULL, '2020-03-09 17:45:10', ''),
(218, 'Mochael 3beet', 3, NULL, '2020-03-09 17:45:10', ''),
(222, 'First image ', 3, 'https://firebasestorage.googleapis.com/v0/b/social-network-de3a1.appspot.com/o/images%2Ftest3?alt=media&token=1993e489-afcc-41a1-a857-f1a125fae273', '2020-03-09 17:45:10', ''),
(223, 'Fggg\nHhhh\nHhh\nHh\n\n\n\n\nHhhh', 3, 'https://firebasestorage.googleapis.com/v0/b/social-network-de3a1.appspot.com/o/images%2Ftest3?alt=media&token=7854a7d6-5e92-47b6-a50c-5dc4908e15da', '2020-03-09 17:45:10', ''),
(224, 'Hhhhhhhhhhvvgggh gb gv gb g g h g h y h h j b bb b hbhvh hb', 3, '', '2020-03-09 17:45:10', ''),
(225, 'G g gvg g g h h hbh hvh uhhhhhhh uhbh y h h h h h h h h h h h h h h h h', 3, '', '2020-03-09 17:45:10', ''),
(226, 'haha', 44, NULL, '2020-03-12 20:52:11', ''),
(227, 'Hh', 43, '', '2020-03-19 16:36:07', ''),
(228, 'Very funny', 43, '', '2020-03-19 16:39:40', ''),
(229, 'Lol', 43, '', '2020-03-19 16:40:54', ''),
(230, 'Shsh', 43, '', '2020-03-19 16:41:53', ''),
(231, 'Ahaha', 43, '', '2020-03-19 16:48:04', '');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user1_id` int(11) NOT NULL,
  `user2_id` int(11) NOT NULL,
  `text` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`id`, `update_at`, `user1_id`, `user2_id`, `text`) VALUES
(1, '2020-03-19 16:27:44', 43, 44, 'Lol'),
(8, '2020-03-17 19:09:14', 43, 3, 'Dhshd'),
(9, '2020-03-17 19:11:21', 3, 44, 'Ddfffff');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` text NOT NULL,
  `image_url` varchar(1000) DEFAULT NULL,
  `phone` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `image_url`, `phone`) VALUES
(1, 'youssef raouf', '', NULL, 0),
(3, 'michael', '', NULL, 0),
(4, 'daniel raouf', '', NULL, 0),
(5, 'raouf', '', NULL, 0),
(6, 'loris', '', NULL, 0),
(7, 'john', '', NULL, 0),
(9, 'Youssef Raouf', 'youssefraouf32@gmail.com', NULL, 2147483647),
(43, 'youssef raouf', 'youssefraouf32@gmail.com', NULL, 1207330798),
(44, 'Daniel Raouf', 'danielraoufwadea@gmail.com', 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10158184769858200&height=200&width=200&ext=1586372876&hash=AeSTYRcMIm2jPLa_', 12073987);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `parent_id` (`parent_id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `emojis`
--
ALTER TABLE `emojis`
  ADD PRIMARY KEY (`type`,`post_id`,`user_id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `followers`
--
ALTER TABLE `followers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `from_user` (`from_user`),
  ADD KEY `to_user` (`to_user`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `from_user` (`from_user`),
  ADD KEY `messages_ibfk_3` (`room_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user1_id` (`user1_id`),
  ADD KEY `user2_id` (`user2_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT for table `followers`
--
ALTER TABLE `followers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=136;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=232;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`parent_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `emojis`
--
ALTER TABLE `emojis`
  ADD CONSTRAINT `emojis_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `emojis_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `followers`
--
ALTER TABLE `followers`
  ADD CONSTRAINT `followers_ibfk_1` FOREIGN KEY (`from_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`to_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`from_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `messages_ibfk_3` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `rooms`
--
ALTER TABLE `rooms`
  ADD CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`user1_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rooms_ibfk_2` FOREIGN KEY (`user2_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
