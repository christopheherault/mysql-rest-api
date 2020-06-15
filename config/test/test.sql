-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 15, 2020 at 06:18 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `cdt`
--

CREATE TABLE `cdt` (
  `id` int(11) NOT NULL,
  `groupe` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `color` varchar(100) NOT NULL DEFAULT 'default',
  `content` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cdt`
--

INSERT INTO `cdt` (`id`, `groupe`, `date`, `color`, `content`) VALUES
(1, '2DE4', '2020-06-11', 'red', 'il y des élève dans l\'école\n\n$2+\\dfrac{2}{3}\\sqrt{\\dfrac{4x}{2}}\\Big)$'),
(2, '2DE4', '2020-06-12', 'blue', 'qsxwdqs'),
(3, '2DE4', '2020-06-10', 'red', 'sdfsdf');

-- --------------------------------------------------------

--
-- Table structure for table `grp`
--

CREATE TABLE `grp` (
  `name` varchar(100) NOT NULL,
  `startWeek` smallint(6) NOT NULL DEFAULT '0',
  `year` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `grp`
--

INSERT INTO `grp` (`name`, `startWeek`, `year`) VALUES
('2DE4', 0, '2019-2020');

-- --------------------------------------------------------

--
-- Table structure for table `test1`
--

CREATE TABLE `test1` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `color` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `test1`
--

INSERT INTO `test1` (`id`, `name`, `color`) VALUES
(1, 'cali', 'red'),
(2, 'césar', 'blue');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cdt`
--
ALTER TABLE `cdt`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `grp`
--
ALTER TABLE `grp`
  ADD PRIMARY KEY (`name`);

--
-- Indexes for table `test1`
--
ALTER TABLE `test1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cdt`
--
ALTER TABLE `cdt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `test1`
--
ALTER TABLE `test1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
