import 'package:cloud_firestore/cloud_firestore.dart';

class FirestoreService {
  final _db = FirebaseFirestore.instance;

  Future<void> saveInterests(String userId, List<String> interests) {
    return _db.collection('users').doc(userId).set({'interests': interests}, SetOptions(merge: true));
  }

  Future<void> toggleBookmark(String userId, String newsId, bool saved) async {
    final ref = _db.collection('users').doc(userId).collection('bookmarks').doc(newsId);
    if (saved) {
      await ref.delete();
    } else {
      await ref.set({'newsId': newsId, 'createdAt': FieldValue.serverTimestamp()});
    }
  }
}
