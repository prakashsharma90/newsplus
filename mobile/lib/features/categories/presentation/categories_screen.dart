import 'package:flutter/material.dart';

class CategoriesScreen extends StatelessWidget {
  const CategoriesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final categories = const ['top-headlines', 'business', 'technology', 'sports', 'entertainment', 'health', 'politics', 'local'];
    return ListView.builder(
      padding: const EdgeInsets.all(16),
      itemCount: categories.length,
      itemBuilder: (_, i) => Card(child: ListTile(title: Text(categories[i]), trailing: const Icon(Icons.chevron_right))),
    );
  }
}
