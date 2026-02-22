import 'package:flutter/material.dart';

class AppTheme {
  static ThemeData get light => ThemeData(
      useMaterial3: true,
      colorSchemeSeed: Colors.deepPurple,
      visualDensity: VisualDensity.adaptivePlatformDensity,
    );

  static ThemeData get dark => ThemeData(
      useMaterial3: true,
      brightness: Brightness.dark,
      colorSchemeSeed: Colors.deepPurple,
    );
}
