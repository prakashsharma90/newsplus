import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'core/theme/app_theme.dart';
import 'features/home/presentation/home_shell.dart';
import 'features/news_detail/presentation/news_detail_screen.dart';
import 'features/onboarding/presentation/onboarding_screen.dart';

class NewsPulseApp extends StatelessWidget {
  const NewsPulseApp({super.key});

  @override
  Widget build(BuildContext context) {
    final router = GoRouter(routes: [
      GoRoute(path: '/', builder: (_, __) => const OnboardingScreen()),
      GoRoute(path: '/shell', builder: (_, __) => const HomeShell()),
      GoRoute(path: '/detail/:newsId', builder: (context, state) => NewsDetailScreen(newsId: state.pathParameters['newsId']!)),
    ]);

    return MaterialApp.router(
      title: 'NewsPulse',
      theme: AppTheme.light,
      darkTheme: AppTheme.dark,
      themeMode: ThemeMode.system,
      routerConfig: router,
    );
  }
}
