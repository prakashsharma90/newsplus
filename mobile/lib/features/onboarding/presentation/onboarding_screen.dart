import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class OnboardingScreen extends StatefulWidget {
  const OnboardingScreen({super.key});

  @override
  State<OnboardingScreen> createState() => _OnboardingScreenState();
}

class _OnboardingScreenState extends State<OnboardingScreen> {
  final all = const ['technology', 'business', 'sports', 'entertainment', 'health', 'politics'];
  final selected = <String>{};

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          const SizedBox(height: 64),
          Text('Stay Updated. Stay Ahead.', style: Theme.of(context).textTheme.headlineMedium),
          const SizedBox(height: 24),
          Wrap(
            spacing: 8,
            runSpacing: 8,
            children: all.map((item) => FilterChip(label: Text(item), selected: selected.contains(item), onSelected: (_) {
              setState(() => selected.contains(item) ? selected.remove(item) : selected.add(item));
            })).toList(),
          ),
          const Spacer(),
          FilledButton(
            onPressed: selected.isEmpty ? null : () => context.go('/shell'),
            child: const Text('Continue'),
          )
        ]),
      ),
    );
  }
}
