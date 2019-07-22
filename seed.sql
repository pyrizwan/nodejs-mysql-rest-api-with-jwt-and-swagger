-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 22, 2019 at 08:27 PM
-- Server version: 5.7.24-0ubuntu0.18.04.1
-- PHP Version: 7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `seed`
--

-- --------------------------------------------------------

--
-- Table structure for table `todo`
--

CREATE TABLE `todo` (
  `id` int(11) NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_on` datetime DEFAULT CURRENT_TIMESTAMP,
  `task` varchar(255) DEFAULT NULL,
  `status` varchar(25) DEFAULT 'Pending'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `todo`
--

INSERT INTO `todo` (`id`, `created_by`, `created_on`, `task`, `status`) VALUES
(1, 1, '2019-07-22 19:01:44', 'string', 'Pending'),
(2, 1, '2019-07-22 19:03:13', 'string', 'Pending'),
(3, 1, '2019-07-22 19:03:58', 'string', 'Done'),
(4, 1, '2019-07-22 19:04:30', 'string', 'Pending'),
(6, 1, '2019-07-22 19:05:14', 'string', 'Pending'),
(7, 1, '2019-07-22 19:05:36', 'string', 'Pending'),
(8, 1, '2019-07-22 19:07:25', 'string', 'Pending'),
(9, 1, '2019-07-22 19:07:43', 'string', 'Pending'),
(10, 1, '2019-07-22 19:08:12', 'string', 'Pending'),
(11, 1, '2019-07-22 19:08:40', 'string', 'Pending'),
(12, 1, '2019-07-22 19:09:59', 'string', 'Pending'),
(13, 1, '2019-07-22 19:11:18', 'string', 'Pending'),
(14, 1, '2019-07-22 19:11:25', 'string', 'Pending'),
(15, 1, '2019-07-22 19:12:35', 'string', 'Pending'),
(16, 1, '2019-07-22 19:15:59', 'lakslaks', 'Pending'),
(17, 1, '2019-07-22 19:21:54', 'string', 'Pending'),
(18, 1, '2019-07-22 19:33:16', 'string', 'Pending'),
(19, 1, '2019-07-22 19:47:04', 'rizwan', 'Pending');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todo`
--
ALTER TABLE `todo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todo`
--
ALTER TABLE `todo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
