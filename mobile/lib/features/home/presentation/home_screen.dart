import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final sample = List.generate(8, (i) => {'newsId': '$i', 'title': 'Breaking update #$i', 'imageUrl': '', 'source': 'Google News', 'publishedAt': '2h ago'});
    return SafeArea(
      child: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          const Text('Breaking', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
          const SizedBox(height: 12),
          SizedBox(
            height: 180,
            child: ListView.separated(
              scrollDirection: Axis.horizontal,
              itemCount: 5,
              separatorBuilder: (_, __) => const SizedBox(width: 12),
              itemBuilder: (_, i) => Container(width: 280, decoration: BoxDecoration(color: Colors.deepPurple.shade100, borderRadius: BorderRadius.circular(16))),
            ),
          ),
          const SizedBox(height: 16),
          ...sample.map((n) => Card(
                child: ListTile(
                  leading: SizedBox(
                    width: 72,
                    child: CachedNetworkImage(imageUrl: n['imageUrl']!, fit: BoxFit.cover, errorWidget: (_, __, ___) => const Icon(Icons.image_outlined)),
                  ),
                  title: Text(n['title']!),
                  subtitle: Text('${n['source']} • ${n['publishedAt']}'),
                  onTap: () => context.push('/detail/${n['newsId']}'),
                ),
              )),
        ],
      ),
    );
  }
}
