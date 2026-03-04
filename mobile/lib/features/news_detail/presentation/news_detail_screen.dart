import 'package:flutter/material.dart';

class NewsDetailScreen extends StatelessWidget {
  const NewsDetailScreen({required this.newsId, super.key});
  final String newsId;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(actions: [IconButton(onPressed: () {}, icon: const Icon(Icons.share)), IconButton(onPressed: () {}, icon: const Icon(Icons.bookmark_border))]),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Container(height: 220, decoration: BoxDecoration(color: Colors.grey.shade300, borderRadius: BorderRadius.circular(16))),
          const SizedBox(height: 16),
          Text('News title for $newsId', style: Theme.of(context).textTheme.headlineSmall),
          const SizedBox(height: 8),
          const Text('Source • 2h ago'),
          const SizedBox(height: 16),
          const Text('Description preview goes here for richer reading context.'),
          const SizedBox(height: 20),
          FilledButton(onPressed: () {}, child: const Text('Read Full Article')),
        ],
      ),
    );
  }
}
