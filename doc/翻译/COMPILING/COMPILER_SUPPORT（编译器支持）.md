以下是我翻译的文档：

# 支持的编译器

| 编译器 | 版本 |
| :--- | ---: |
| [GCC](https://gcc.gnu.org) | 9.1 |
| [clang](https://clang.llvm.org) | 10.0 |
| [MinGW-w64](https://www.mingw-w64.org) | 10.0.0 <br/> GCC 11.2 |
| [Visual Studio](https://visualstudio.microsoft.com/) | [2019](COMPILING-VS-VCPKG.md) |
| [XCode](https://developer.apple.com/xcode) | 10.1 <br/> [macOS 10.13](https://en.wikipedia.org/wiki/MacOS_High_Sierra) |

## Mingw 和 Mingw-w64

我们在 Linux 上使用 Mingw 来交叉编译 Windows 版本。
它目前用于测试和 Windows 发行版的二进制文件。

## MSYS2

MSYS2 是[在 Windows 上构建项目](COMPILING-MSYS.md)的一种方式。它
目前提供了 7 或更高版本的 gcc。

MSYS 也提供了 clang。我们目前不支持在这里使用 clang，但是
欢迎对此进行工作。

## XCode（XCode）

我们对编译器支持的目标是让新的贡献者尽可能容易地开始开发游戏，同时也使用我们能够使用的最新的编译器（以及相应的语言标准）。

为此，我们的目标是支持gcc和clang，从最新的稳定版本到任何受支持的流行发行版或相关开发环境中提供的版本，包括Ubuntu、Debian、MSYS和XCode。

由于macOS可能更难更新，我们有活跃的开发者和用户在不受支持的macOS版本上，我们希望支持。为了支持合理数量的用户，我们的目标是至少支持95%的用户，按macOS市场份额计算。

在写这篇文章的时候：
* Bionic即将结束一般支持，所以我们的目标是支持下一个最旧的Ubuntu LTS（Focal）。Focal [默认使用g++ 9.3](https://packages.ubuntu.com/focal/g++) 和 [clang 10](https://packages.ubuntu.com/focal/clang)。
* Debian稳定版是Bullseye，[默认使用g++ 10.2](https://packages.debian.org/bullseye/g++)。
* 最旧的[受支持的Fedora](https://fedoraproject.org/wiki/Releases)是36，使用[gcc 12.0](https://fedora.pkgs.org/36/fedora-x86_64/gcc-12.0.1-0.16.fc36.x86_64.rpm.html)。
* MSYS [提供gcc 12.2](https://packages.msys2.org/base)。
* macOS 10.13+占有96.0%的[市场份额](https://gs.statcounter.com/os-version-market-share/macos/desktop/worldwide)，对应于[XCode 10.1](https://xcodereleases.com/)。

实际上，编译器支持通常由我们的自动化测试覆盖的内容决定。

在写这篇文章的时候，最旧的相关编译器是XCode 10.1，是macOS 10.13支持的最新版本，它基于LLVM 6。

使用gcc 9.3、clang 10和XCode 10.1，我们可以获得所有的C++17语言特性和[大部分但不是全部的C++17库特性](https://en.cppreference.com/w/cpp/compiler_support/17)。以下C++17特性没有得到足够广泛的支持，以至于我们无法使用：

* 并行算法和执行策略。
* 硬件干扰大小。
* 文件系统库（注意，我们已经有一个后移植的文件系统库与CDDA捆绑在一起，所以可以用它代替）。
* 多态内存资源。
* 数学特殊函数。
* 浮点数的基本字符串转换。
* `std::shared_ptr`和`weak_ptr`中的数组支持。

其中一些甚至在最新的XCode中也不支持，所以我们不能指望在很多年内使用它们。

阻止我们使用更新的C++特性的限制因素主要是XCode，在移动到C++20之前，我们可能需要版本13。

为了监控macOS的市场份额，我们有一个辅助脚本在tools/macos-market-share.py中。从[statcounter](https://gs.statcounter.com/os-version-market-share/macos/desktop/worldwide)下载CSV格式的数据，并用该脚本处理它，以获得随时间变化的累积市场份额的摘要。例如，这个输出：
```
2021-05 :: 10.11:  8.2  10.12: 11.0  10.13: 18.3  10.14: 27.0  10.15: 98.1
2021-06 :: 10.11:  6.6  10.12:  9.3  10.13: 16.3  10.14: 24.6  10.15: 99.0
2021-07 :: 10.11:  4.7  10.12:  7.4  10.13: 14.2  10.14: 22.1  10.15: 99.3
```

显示了截至10.11的版本的累积市场份额在2021-07第一次降到5%以下，此时我们（遵循上述指导方针）允许自己放弃对10.11的支持。
